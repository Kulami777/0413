function setupMenu() {
    const menu = document.getElementById("menu");
  
    menu.style.position = 'fixed';
    menu.style.top = '20px';
    menu.style.right = '20px';
    menu.style.zIndex = '1000';
    menu.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    menu.style.padding = '10px';
    menu.style.borderRadius = '8px';
    menu.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    menu.style.fontFamily = 'Arial, sans-serif';
  
    const title = document.createElement("h3");
    title.textContent = "選單";
    title.style.marginTop = '0';
    menu.appendChild(title);
  
    const options = [
      { name: "自我介紹", url: "about.html" },
      {
        name: "作品集", subOptions: [
          { name: "第一周作業", url: "https://kulami777.github.io/20250303-2/" },
          { name: "第二周作業", url: "https://kulami777.github.io/20250317/" },
          { name: "第三周作業", url: "https://kulami777.github.io/20250324/" },
          { name: "第四周作業", url: "https://www.et.tku.edu.tw/" }
        ]
      },
      { name: "測驗卷", url: "https://kulami777.github.io/20250310./" },
      { name: "教學影片", url: "https://www.youtube.com/embed/qs2tOs5JFIo" }
    ];
  
    let openedSubMenu = null;
  
    options.forEach(option => {
      const container = document.createElement("div");
      container.style.marginBottom = "6px";
  
      const button = document.createElement("button");
      button.textContent = option.name;
      button.style.width = '100%';
      button.style.padding = '8px 12px';
      button.style.border = 'none';
      button.style.borderRadius = '4px';
      button.style.backgroundColor = '#f0f0f0';
      button.style.cursor = 'pointer';
      button.style.textAlign = 'left';
      button.style.position = 'relative';
  
      const arrow = document.createElement("span");
      arrow.style.float = 'right';
      arrow.style.transition = 'transform 0.3s ease';
  
      if (option.subOptions) {
        arrow.textContent = '▶'; // 初始箭頭
        button.appendChild(arrow);
  
        const subMenu = document.createElement("div");
        subMenu.style.display = "none";
        subMenu.style.marginTop = "5px";
        subMenu.style.paddingLeft = "10px";
        subMenu.style.borderLeft = "2px solid #ccc";
  
        option.subOptions.forEach(sub => {
          const subBtn = document.createElement("button");
          subBtn.textContent = sub.name;
          subBtn.style.display = 'block';
          subBtn.style.width = '100%';
          subBtn.style.padding = '6px 12px';
          subBtn.style.margin = '2px 0';
          subBtn.style.border = 'none';
          subBtn.style.borderRadius = '4px';
          subBtn.style.backgroundColor = '#ffffff';
          subBtn.style.cursor = 'pointer';
  
          subBtn.onclick = (e) => {
            e.stopPropagation();
            const iframe = document.getElementById("content");
            iframe.src = sub.url;
            iframe.style.display = "block";
          };
  
          subMenu.appendChild(subBtn);
        });
  
        button.onclick = (e) => {
          e.stopPropagation();
  
          // 自動關閉已開啟的子選單
          if (openedSubMenu && openedSubMenu !== subMenu) {
            openedSubMenu.style.display = 'none';
            openedSubMenu.previousSibling.querySelector("span").textContent = '▶';
          }
  
          const isOpen = subMenu.style.display === "block";
          subMenu.style.display = isOpen ? "none" : "block";
          arrow.textContent = isOpen ? '▶' : '▼';
          openedSubMenu = isOpen ? null : subMenu;
        };
  
        container.appendChild(button);
        container.appendChild(subMenu);
      } else {
        button.onclick = (e) => {
          e.stopPropagation();
          const iframe = document.getElementById("content");
          iframe.src = option.url;
          iframe.style.display = "block";
        };
  
        container.appendChild(button);
      }
  
      menu.appendChild(container);
    });
  }
  