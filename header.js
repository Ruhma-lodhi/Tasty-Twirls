class Header extends HTMLElement {
  constructor() 
  {  super();  }
  connectedCallback() {
    this.innerHTML = `
      <style>
      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: rgba(235, 165, 26, 0.4) 0px 5px, rgba(235, 165, 26, 0.3) 0px 10px,
          rgba(235, 165, 26, 0.2) 0px 15px, rgba(235, 165, 26, 0.1) 0px 20px,
          rgba(235, 165, 26, 0.05) 0px 25px;
        margin-bottom: 50px;
      }
      .logo-container,
      .links {
        display: flex;
        align-items: center;
      }
      .logo {
        height: 150px;
      }
      .link {
        color: black;
        margin-right: 10px;
        text-decoration: underline;
      }
      .search-bar {
        display: flex;
        height: 30px;
        border-radius: 10px;
        padding-left: 10px;
        border-width: 0px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        width: 500px
      }
      .input {
        border: none;
        width: 100%;
      }
      .search-btn {
        border: none;
        border-radius: 0 10px 10px 0px;
      }
      .dropdown {
        position: relative;
        display: inline-block;
      }
      
      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
      }
      
      .dropdown-content a {
        color: black;
        padding: 12px 16px;
        display: block;
      }
      
      .dropdown-content a:hover {
        background-color: #ddd;
      }
      
      .dropdown:hover .dropdown-content {
        display: block;
      }
      </style>
      <header>
      <navbar class="navbar">
      <div class="logo-container">
        <a href="./home.html"
          ><img class="logo" src="../assets/logo.png" alt="logo"
        /></a>

        <div class="search-container">
    <form class="search-bar">
      <input class='input'  type="text" placeholder="Search.." name="search">
      <button class="search-btn" type="submit"><i class="fa fa-search"></i></button>
    </form>
  </div>
      </div>
      <div class="links">
      <a class="link" href="./home.html">Home</a>
        <div class="dropdown">
          <a class="link">Recipes</a>
          <div class="dropdown-content">
            <a href="./appetizer.html">Appetizer</a>
            <a href="./main-course.html">Main course</a>
            <a href="./dessert.html">Desserts</a>
          </div>
        </div>
        <a class="link" href="./about.html">About us</a>
      </div>
    </navbar>
      </header>
    `;
  }
}

customElements.define('my-header', Header);
