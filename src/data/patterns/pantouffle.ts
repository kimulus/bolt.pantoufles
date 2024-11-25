export const pantoufflePattern = {
  viewBox: "0 0 590 317", // Ajustez le viewBox en fonction des dimensions globales de l'image
  stroke: "black",
  strokeWidth: 15, 
  sections: [
    {
      id: 'section-sole',
      name: 'Sole',
      path: `M166.5 110.5C189.5 88.3364 218.5 9.00008 218.5 9.00008L193.5 2.50009C193.5 2.50009 181.75 55.4379 132.5 97.5001C83.25 139.562 2.5 148.5 2.5 148.5L6 174C6 174 42 166.5 73.5 156C105 145.5 143.5 132.664 166.5 110.5Z`,
      paletteType: 'main',
      strokeWidth: 5,
    },
    {
      id: 'section-side',
      name: 'Side Panel',
      path: `M218.5 9.00008C218.5 9.00008 189.5 88.3364 166.5 110.5C245.568 116.1 291 119.5 363 127L516 140C547.415 143.817 555.681 142.384 563.659 141.001C569.268 140.029 574.734 139.082 588 140C588 140 573 92.2501 544 73.0001C515 53.7501 444 39.0001 418 36.5001C403.522 35.108 380.052 33.4058 355.877 31.6525C336.638 30.2572 316.953 28.8295 301 27.5001C265 24.5001 218.5 9.00008 218.5 9.00008Z`,
      paletteType: 'accent',
      strokeWidth: 5,
    },
    {
      id: 'section-cuff',
      name: 'Cuff',
      path: `M166.5 110.5C143.5 132.664 105 145.5 73.5 156C42 166.5 6 174 6 174L11.5 229C12.7046 228.319 13.8833 227.652 15.042 226.995C41.7525 211.864 57.777 202.787 132.5 183C188.652 171.705 218.762 167.176 270.5 166.5C361.051 167.25 391.11 169.411 436 174C443.054 174.907 449.617 175.769 455.767 176.576C455.788 176.579 455.809 176.582 455.829 176.585L455.877 176.591C496.96 181.985 519.636 184.963 547.5 183H588V140C574.734 139.082 569.268 140.029 563.659 141.001C555.681 142.384 547.415 143.817 516 140C469.112 138.023 407.924 131.68 363 127C291 119.5 245.568 116.1 166.5 110.5Z`,
      paletteType: 'trim',
      strokeWidth: 5,
    },
    {
      id: 'section-top',
      name: 'Top',
      path: `M270.5 166.5C218.762 167.176 188.652 171.705 132.5 183C57.777 202.787 41.7525 211.864 15.042 226.995C13.8833 227.652 12.7046 228.319 11.5 229C13.3382 289.683 42.7408 307.39 136 315.5C316.383 308.107 400.943 300.614 503.5 277.5C553.413 257.361 571.687 236.443 588 183H547.5C519.636 184.963 496.96 181.985 455.877 176.591L455.829 176.585L455.767 176.576C449.617 175.769 443.054 174.907 436 174C391.11 169.411 361.051 167.25 270.5 166.5Z`,
      paletteType: 'collar',
      strokeWidth: 5,
    },
  ],
};
