// ログイン用のハードコーディングされた認証情報
const validEmail = "test@example.com";
const validPassword = "0000";

// 書籍データのサンプル（辞書型データ）
let books = [
  { title: "JavaScript入門", author: "田中 太郎" },
  { title: "HTML & CSS", author: "佐藤 花子" },
  { title: "Reactの基礎", author: "鈴木 一郎" },
];

let editIndex = -1; // 編集対象のインデックス

// ログイン関数
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const loginError = document.getElementById("login-error");

  // ハードコーディングされた認証情報のチェック
  if (email === validEmail && password === validPassword) {
    loginError.textContent = ""; // エラーメッセージをクリア
    document.getElementById("auth-section").style.display = "none";
    document.getElementById("book-section").style.display = "block";
    displayBooks(); // 書籍一覧を表示
  } else {
    loginError.textContent =
      "メールアドレスまたはパスワードが正しくありません。";
  }
}

// ログアウト関数
function logout() {
  document.getElementById("auth-section").style.display = "block";
  document.getElementById("book-section").style.display = "none";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}

// 書籍を表示する関数
function displayBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = ""; // リストをクリア

  books.forEach((book, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${book.title} (${book.author}) 
      <span class="edit-btn" onclick="showEditBookForm(${index})">編集</span>
      <span class="delete-btn" onclick="deleteBook(${index})">削除</span>`;
    bookList.appendChild(li);
  });
}

// 書籍を追加する関数
function addBook() {
  const title = document.getElementById("new-title").value;
  const author = document.getElementById("new-author").value;

  if (title && author) {
    books.push({ title, author });
    displayBooks(); // 更新されたリストを表示
    cancelAddBook(); // フォームを閉じる
  }
}

// 書籍を削除する関数
function deleteBook(index) {
  books.splice(index, 1); // 該当の書籍を削除
  displayBooks(); // 更新されたリストを表示
}

// 書籍を編集する関数
function updateBook() {
  const newTitle = document.getElementById("edit-title").value;
  const newAuthor = document.getElementById("edit-author").value;

  if (newTitle && newAuthor && editIndex >= 0) {
    books[editIndex].title = newTitle;
    books[editIndex].author = newAuthor;
    displayBooks(); // 更新されたリストを表示
    cancelEditBook(); // フォームを閉じる
  }
}

// 登録フォームを表示する関数
function showAddBookForm() {
  document.getElementById("book-section").style.display = "none";
  document.getElementById("add-book-section").style.display = "block";
}

// 登録フォームをキャンセルする関数
function cancelAddBook() {
  document.getElementById("new-title").value = "";
  document.getElementById("new-author").value = "";
  document.getElementById("add-book-section").style.display = "none";
  document.getElementById("book-section").style.display = "block";
}

// 編集フォームを表示する関数
function showEditBookForm(index) {
  editIndex = index;
  document.getElementById("edit-title").value = books[index].title;
  document.getElementById("edit-author").value = books[index].author;
  document.getElementById("book-section").style.display = "none";
  document.getElementById("edit-book-section").style.display = "block";
}

// 編集フォームをキャンセルする関数
function cancelEditBook() {
  document.getElementById("edit-title").value = "";
  document.getElementById("edit-author").value = "";
  document.getElementById("edit-book-section").style.display = "none";
  document.getElementById("book-section").style.display = "block";
}
