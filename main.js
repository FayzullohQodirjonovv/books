class Book {
  constructor(nomi, muallif, janr) {
    this.nomi = nomi;
    this.muallif = muallif;
    this.janr = janr;
    this.mavjudligi = true;
  }
  getDetails() {
    return `ismi: ${this.nomi}, muallif: ${this.muallif}, janri: ${this.janr}, mavjudligi: ${this.mavjudligi}`;
  }
  markAsBorrowed() {
    this.mavjudligi = false;
  }
  markAsReturned() {
    this.mavjudligi = true;
  }
}

class Library {
  constructor() {
    this.books = [];
  }
  addBook(book) {
    if (!this.books.some((b) => b.nomi === book.nomi)) {
      this.books.push(book);
      return true;
    } else {
      return false;
    }
  }
  removeBook(nomi) {
    this.books = this.books.filter((book) => book.nomi !== nomi);
  }
  searchByAuthor(muallif) {
    return this.books.filter((book) => book.muallif === muallif);
  }
  listAvailableBooks() {
    return this.books.filter((book) => book.mavjudligi);
  }
}

const library = new Library();
const bookListDiv = document.getElementById("bookList");
const genreSearchInput = document.getElementById("genreSearchInput");
const searchButton = document.getElementById("searchButton");
const newTitleInput = document.getElementById("newTitleInput");
const newAuthorInput = document.getElementById("newAuthorInput");
const newGenreInput = document.getElementById("newGenreInput");
const addBookButton = document.getElementById("addBookButton");

function displayBooks(books) {
  bookListDiv.innerHTML = "";
  books.forEach((book) => {
    const bookdiv = document.createElement("div");
    bookdiv.textContent = book.getDetails();
    bookListDiv.appendChild(bookdiv);
  });
}

displayBooks(library.listAvailableBooks());

addBookButton.addEventListener("click", () => {
  const nomi = newTitleInput.value;
  const muallif = newAuthorInput.value;
  const janr = newGenreInput.value;

  if (nomi && muallif && janr) {
    const newbook = new Book(nomi, muallif, janr);
    if (library.addBook(newbook)) {
      displayBooks(library.listAvailableBooks());
      newTitleInput.value = "";
      newAuthorInput.value = "";
      newGenreInput.value = "";
    } else {
      alert("Bu nomli kitob allaqachon mavjud.");
    }
  } else {
    alert("Iltimos, barcha maydonlarni to'ldiring.");
  }
});
// // 2masala
// class Bus {
//     constructor(id, route, seats) {
//       this.id = id;
//       this.route = route;
//       this.seats = seats;
//       this.reservedSeats = 0;
//     }

//     getDetails() {
//       return `ID: ${this.id}, Yo'nalish: ${this.route}, O'rinlar: ${this.seats}, Band qilingan o'rinlar: ${this.reservedSeats}`;
//     }

//     reserveSeat() {
//       if (this.reservedSeats < this.seats) {
//         this.reservedSeats++;
//         return true;
//       }
//       return false;
//     }

//     cancelReservation() {
//       if (this.reservedSeats > 0) {
//         this.reservedSeats--;
//         return true;
//       }
//       return false;
//     }
//   }

//   class BusSystem {
//     constructor() {
//       this.buses = [];
//     }

//     addBus(bus) {
//       this.buses.push(bus);
//     }

//     listBuses() {
//       return this.buses.map(bus => bus.getDetails());
//     }

//     searchByRoute(route) {
//       return this.buses.filter(bus => bus.route === route).map(bus => bus.getDetails());
//     }

//     reserveSeat(busId) {
//       const bus = this.buses.find(bus => bus.id === busId);
//       if (bus) {
//         return bus.reserveSeat();
//       }
//       return false;
//     }

//     cancelReservation(busId) {
//       const bus = this.buses.find(bus => bus.id === busId);
//       if (bus) {
//         return bus.cancelReservation();
//       }
//       return false;
//     }
//   }

//   const busSystem = new BusSystem();
//   const busListDiv = document.getElementById("busList");

//   function displayBuses(buses) {
//     busListDiv.innerHTML = "";
//     buses.forEach(bus => {
//       const busDiv = document.createElement("div");
//       busDiv.textContent = bus;
//       busListDiv.appendChild(busDiv);
//     });
//   }

//   displayBuses(busSystem.listBuses());

//   document.getElementById("addBusBtn").addEventListener("click", () => {
//     const id = parseInt(document.getElementById("busId").value);
//     const route = document.getElementById("route").value;
//     const seats = parseInt(document.getElementById("seats").value);

//     if (id && route && seats) {
//       busSystem.addBus(new Bus(id, route, seats));
//       displayBuses(busSystem.listBuses());
//     } else {
//       alert("Iltimos, barcha maydonlarni to'ldiring!");
//     }
//   });

//   document.getElementById("searchBtn").addEventListener("click", () => {
//     const route = document.getElementById("searchRoute").value;
//     displayBuses(busSystem.searchByRoute(route));
//   });
