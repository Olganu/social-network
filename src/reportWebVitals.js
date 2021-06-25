const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// { id: 1, photoUrl: 'https://avatarko.ru/img/avatar/11/muzhchina_kapyushon_10753.jpg', followed: true, fullName: 'Olga', status: 'I am a boss', location: { city: 'kharkov', country: 'Ukraine' } },
//                     { id: 2, photoUrl: 'https://avatarko.ru/img/avatar/11/muzhchina_kapyushon_10753.jpg', followed: false, fullName: 'Kira', status: 'I am a boss', location: { city: 'Moskov', country: 'Russia' } },
//                     { id: 3, photoUrl: 'https://avatarko.ru/img/avatar/11/muzhchina_kapyushon_10753.jpg', followed: true, fullName: 'Andrey', status: 'I am a boss', location: { city: 'kharkov', country: 'Ukraine' } },
//                     { id: 4, photoUrl: 'https://avatarko.ru/img/avatar/11/muzhchina_kapyushon_10753.jpg', followed: false, fullName: 'Toma', status: 'I am a boss', location: { city: 'kharkov', country: 'Ukraine' } }

export default reportWebVitals;
