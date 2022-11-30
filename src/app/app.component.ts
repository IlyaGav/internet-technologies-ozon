// @ts-nocheck

import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'app-root-container'
  }
})

export class AppComponent implements OnInit {

  ngOnInit(): void {
    const search = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-button');
    const trigger = document.getElementById('search-activity');
    const container = document.getElementById('overlay-container');

    const key = 'search';

    function get() {
      return JSON.parse(localStorage.getItem(key)) ?? undefined;
    }

    function save(value: string) {
      localStorage.setItem(key, JSON.stringify(value));
    }

    searchBtn.addEventListener('click', () => {
      save([...get() ?? [], search.value]);
      search.value = '';
    });

    trigger.addEventListener('click', () => {
      const rect = trigger.getBoundingClientRect();

      if (get()?.length === 0) return;

      container.innerHTML += `<div id="list-container"
                                   class="list-container"
                                   style="position:absolute;
                                          left: ${rect.left}px;
                                          top: ${rect.top + rect.height}px;">
                              </div>`;

      const list = document.getElementById('list-container');

      get().forEach(value => {
        list.innerHTML += `<div value="${value}"
                                class="list-container-item">
                              ${value}
                               <button class="remove-button"> x </button>
                           </div>`;
      });

      const listClickEvent = function (e) {
        if (e.srcElement.tagName.toLowerCase() === 'button') {
          const element = e.srcElement.parentElement;

          save(get().filter(x => x != element.getAttribute('value')));

          list.removeChild(element);

          if (get()?.length > 0) {
            e.stopPropagation();
          }

        } else if (e.srcElement.hasAttribute('value')) {
          search.value = e.srcElement.getAttribute('value');
        }
      }

      list.addEventListener('click', listClickEvent);

      container.addEventListener('click', () => {
        container.innerHTML = '';
        list.removeEventListener('click', listClickEvent);
      })
    })
  }

}
