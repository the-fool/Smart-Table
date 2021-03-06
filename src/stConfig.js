ng.module('smart-table')
  .constant('stConfig', {
    pagination: {
      template: 'template/smart-table/pagination.html',
      itemsByPage: 10,
      displayedPages: 5
    },
    search: {
      delay: 400, // ms
      inputEvent: 'input'
    },
    select: {
      mode: 'single',
      selectedClass: 'st-selected'
    },
    sort: {
      pristineClass: 'st-sort-pristine',
      ascentClass: 'st-sort-ascent',
      descentClass: 'st-sort-descent',
      descendingFirst: false,
      skipNatural: false,
      delay:300
    },
    pipe: {
      delay: 100 //ms
    }
  });
