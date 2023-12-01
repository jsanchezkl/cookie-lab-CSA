import { CookieConsentOptions } from '@notiz/cookie-monster';

export const cookieConfig: CookieConsentOptions = {
  title: 'Utilizamos cookies 🍪',
  message: `Utilizamos cookies para personalizar el contenido y analizar el acceso a nuestro sitio web. Puede encontrar más información sobre las cookies utilizadas en nuestra política de privacidad.`,
  links: [
    { label: 'Política de privacidad', url: 'http://localhost.4200/privacy' },
  ],
  acceptAllLabel: 'Aceptar todo',
  acceptSelectionLabel: 'Aceptar selección',
  showMoreLabel: 'Más opciones',
  showLessLabel: 'Mostrar menos',
  cookies: {
    necessary: {
      title: 'Cookies necesarias',
      label:
        'Estas cookies son necesarias para que el sitio funcione correctamente.',
      value: true,
      //disabled: true,
    },
    functional: {
      title: 'Cookies funcionales',
      label:
        'Las cookies funcionales permiten guardar información que modifica la apariencia o el funcionamiento del sitio web.',
    },
    statistics: {
      title: 'Estadísticas',
      label:
        'Las cookies estadísticas ayudan al propietario del sitio web a comprender cómo interactúan los visitantes con el sitio web mediante la recopilación de información y la elaboración de informes.',
    },
    marketing: {
      title: 'Marketing',
      label:
        'Las cookies de marketing / segmentación se utilizan normalmente para mostrarle anuncios que coincidan con sus intereses. Cuando visita otro sitio web, se reconoce la cookie de su navegador y se le muestran anuncios seleccionados basados en la información almacenada en esta cookie (Art. 6 párrafo 1 frase 1 a) GDPR).',
    },
  },
};
