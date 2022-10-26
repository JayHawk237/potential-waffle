var menuLinks = [
    { text: "about", href: "/about" },
    {
      text: "catalog",
      href: "#",
      subLinks: [
        { text: "all", href: "/catalog/all" },
        { text: "top selling", href: "/catalog/top" },
        { text: "search", href: "/catalog/search" },
      ],
    },
    {
      text: "orders",
      href: "#",
      subLinks: [
        { text: "new", href: "/orders/new" },
        { text: "pending", href: "/orders/pending" },
        { text: "history", href: "/orders/history" },
      ],
    },
    {
      text: "account",
      href: "#",
      subLinks: [
        { text: "profile", href: "/account/profile" },
        { text: "sign out", href: "/account/signout" },
      ],
    },
  ];
  
  const mainEl = document.querySelector('main');
 
  
  mainEl.style.backgroundColor = '#4a4e4d';
 
  
  mainEl.innerHTML = '<h1> SEI Rocks! </h1>';

  
  mainEl.classList.toggle("flex-ctr");
  mainEl.classList.add("flex-ctr");
  
  const topMenuEl = document.getElementById("top-menu");
  
  topMenuEl.style.height = "100%";
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  topMenuEl.classList.add("flex-around");
  menuLinks.forEach((link) => {
    const newATag = document.createElement("a");
    newATag.setAttribute("href", link.href);
    newATag.textContent = link.text;
    topMenuEl.append(newATag);
  });
  const subMenuEl = document.getElementById("sub-menu");
  subMenuEl.style.height = "100%";
  
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  
  subMenuEl.classList.toggle("flex-around");
  subMenuEl.classList.add("flex-around");
  
  subMenuEl.style.position = "absolute";
  
  subMenuEl.style.top = "0";
  
  const topMenuLinks = topMenuEl.querySelectorAll("a");
  let showingSubMenu = false;
  
  topMenuEl.addEventListener("click", (evt) => {
    evt.preventDefault();
    if (evt.target.tagName !== "A") {
      return;
    }
   
    if (evt.target.classList.contains("active")) {
      evt.target.remove("active");
      evt.target.classList.remove("active");
      showingSubMenu = false;
      subMenuEl.style.top = "0";
      return;
    }
    
    topMenuLinks.forEach((arg) => {
      arg.classList.remove("active");
    });
    
    evt.target.classList.add("active");
   
    let text = evt.target.textContent;
    let currentLink = {};
    for (let i = 0; i < menuLinks.length; i++) {
      if (text === menuLinks[i].text) {
        showingSubMenu = menuLinks[i].hasOwnProperty("subLinks");
        currentLink = menuLinks[i];
      }
    }
    
    if (showingSubMenu === true) {
      subMenuEl.style.top = "100%";
      buildSubMenu(currentLink);
    } else {
      subMenuEl.style.top = "0";
    }
    
    function buildSubMenu() {
      subMenuEl.innerHTML = "";
      
      console.log(subMenuEl);
      currentLink.subLinks.forEach((link) => {
        let a = document.createElement("A");
        a.setAttribute("href", link.href);
        a.textContent = link.text;
        subMenuEl.append(a);
      });
    }
  
    if (evt.target.text === 'about'){
      mainEl.innerHTML = `<h1 style="text-transform:uppercase;">${evt.target.text}</h1`;
    }
  });
  
      subMenuEl.addEventListener("click", (evt) => {
          evt.preventDefault();
      if (evt.target.tagName !== "A") {
          return;
      }
    
    showingSubMenu = false;
    subMenuEl.style.top = "0";
  
    topMenuLinks.forEach((arg) => {
      arg.classList.remove("active");
    });
  
    mainEl.innerHTML = `<h1 style="text-transform:uppercase;">${evt.target.text}</h1`;
  
  });