const reportWebVitals = Entryff => {
  if (Entryff && Entryff instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(Entryff);
      getFID(Entryff);
      getFCP(Entryff);
      getLCP(Entryff);
      getTTFB(Entryff);
    });
  }
};

export default reportWebVitals;
