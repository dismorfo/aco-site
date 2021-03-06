async function searchcollections () {
  return {
    "htmltitle": "Search Collections",
    "title": [{
      "language_code": "en",
      "language_dir": "ltr",
      "html": "Search Collections"
    }, {
      "language_code": "ar",
      "language_dir": "rtl",
      "html": "إبحث في المجموعات"
    }],
    "menu": [{
      "context": "navbar",
      "label": "Search",
      "weight": 5
    }],
    "route": "/searchcollections/index.html",
    "bodyClass": "search"
  }
};

module.exports = searchcollections;
