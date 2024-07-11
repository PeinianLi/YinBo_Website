
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DecentralizedLibrary {
    struct Book {
        uint256 id;
        string title;
        string author;
        uint256 price;
        address payable owner;
        bool isListed;
    }

    uint256 public nextBookId;
    mapping(uint256 => Book) public books;
    mapping(address => Book[]) public ownedBooks;

    event BookListed(uint256 id, string title, string author, uint256 price, address owner);
    event BookSold(uint256 id, string title, address buyer, uint256 price);
    event BookDelisted(uint256 id, string title);

    // List a new book for sale
    function listBook(string memory _title, string memory _author, uint256 _price) public {
        require(_price > 0, "Price must be greater than 0");
        Book memory newBook = Book(nextBookId, _title, _author, _price, payable(msg.sender), true);
        books[nextBookId] = newBook;
        ownedBooks[msg.sender].push(newBook);
        emit BookListed(nextBookId, _title, _author, _price, msg.sender);
        nextBookId++;
    }

    // Buy a listed book
    function buyBook(uint256 _bookId) public payable {
        Book storage book = books[_bookId];
        require(book.isListed, "Book is not available for sale");
        require(msg.value == book.price, "Incorrect amount of Ether sent");

        // Transfer ownership
        book.owner.transfer(msg.value);
        removeBookFromOwned(book.owner, _bookId);
        book.owner = payable(msg.sender);
        ownedBooks[msg.sender].push(book);
        book.isListed = false;

        emit BookSold(_bookId, book.title, msg.sender, book.price);
    }

    // Delist a book from sale
    function delistBook(uint256 _bookId) public {
        Book storage book = books[_bookId];
        require(msg.sender == book.owner, "Only the owner can delist the book");
        book.isListed = false;
        emit BookDelisted(_bookId, book.title);
    }

    // Helper function to remove a book from the ownedBooks mapping
    function removeBookFromOwned(address owner, uint256 _bookId) internal {
        Book[] storage bookArray = ownedBooks[owner];
        for (uint256 i = 0; i < bookArray.length; i++) {
            if (bookArray[i].id == _bookId) {
                bookArray[i] = bookArray[bookArray.length - 1];
                bookArray.pop();
                break;
            }
        }
    }

    // Get the list of books owned by an address
    function getOwnedBooks() public view returns (Book[] memory) {
        return ownedBooks[msg.sender];
    }
}