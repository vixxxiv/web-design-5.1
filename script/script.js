
    const root=document.documentElement; const themeToggle=document.getElementById('themeToggle'); const themeIcon=document.getElementById('themeIcon');
    function setIcon(){ themeIcon.innerHTML=root.classList.contains('theme-light')
      ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
      : '<circle cx="12" cy="12" r="5"/>'+
        '<line x1="12" y1="1" x2="12" y2="3"/>'+
        '<line x1="12" y1="21" x2="12" y2="23"/>'+
        '<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>'+
        '<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>'+
        '<line x1="1" y1="12" x2="3" y2="12"/>'+
        '<line x1="21" y1="12" x2="23" y2="12"/>'+
        '<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>'+
        '<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
    }
    themeToggle.addEventListener('click',()=>{root.classList.toggle('theme-light'); setIcon();}); setIcon();

    // Анимация кнопок при наведении (Web Animations API)
    document.querySelectorAll('.btn-overlay').forEach(btn=>{
      btn.addEventListener('mouseenter',()=>{
        btn.animate([
          { transform:'translateX(-50%) scale(1.05)', opacity:1 },
          { transform:'translateX(-50%) scale(1.18)', opacity:1 },
          { transform:'translateX(-50%) scale(1.10)', opacity:1 }
        ],{ duration:380, easing:'cubic-bezier(.22,.61,.36,1)', iterations:1 });
      });
    });