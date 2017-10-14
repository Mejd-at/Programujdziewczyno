'use strict';

    document.addEventListener('DOMContentLoaded', function() {
      
        // Zadanie 1 - Dropdown menu
        
        var menu = document.querySelector('.for-dropdown');
        var list = document.querySelector('.dropdown');
        
        
        
        menu.addEventListener('mouseover', function() {
            list.style.display = 'block';
        })
        
        menu.addEventListener('mouseout', function() {
            list.style.display = 'none';
        })
        
        
        
        
        
        
        
        
    });