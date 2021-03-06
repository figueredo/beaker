import * as svg from '../../lib/fg/svg'

export default function render () {
  return svg.render(`
<svg class="icon folder" width="55px" height="44px" viewBox="0 0 55 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <filter x="-3.8%" y="-2.4%" width="109.4%" height="109.5%" filterUnits="objectBoundingBox" id="filter-1">
            <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.39 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
            <feMerge>
                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
        </filter>
        <linearGradient x1="50%" y1="138.288762%" x2="50%" y2="0%" id="linearGradient-2">
            <stop stop-color="#FFF5D9" offset="0%"></stop>
            <stop stop-color="#F7E5A1" offset="100%"></stop>
        </linearGradient>
        <rect id="path-3" x="0" y="8" width="53" height="34" rx="2"></rect>
        <path d="M18.097561,5 L51,5 C52.1045695,5 53,5.8954305 53,7 L53,10 L0,10 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 L13.0773961,0 C14.5729567,-2.49517608e-15 15.943592,0.834305362 16.6305106,2.16277986 L18.097561,5 L18.097561,5 Z" id="path-4"></path>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="folder-color-copy" filter="url(#filter-1)" transform="translate(1.000000, 0.000000)">
            <g id="Rectangle-16">
                <use fill="url(#linearGradient-2)" fill-rule="evenodd" xlink:href="#path-3"></use>
                <rect stroke="#918457" stroke-width="1" x="0.5" y="8.5" width="52" height="33" rx="2"></rect>
            </g>
            <g id="Combined-Shape">
                <use fill="#FFECAD" fill-rule="evenodd" xlink:href="#path-4"></use>
                <path stroke="#918557" stroke-width="1" d="M0.5,9.5 L52.5,9.5 L52.5,7 C52.5,6.17157288 51.8284271,5.5 51,5.5 L17.7932111,5.5 L16.1863713,2.39243237 C15.5853176,1.23001719 14.3860117,0.5 13.0773961,0.5 L2,0.5 C1.17157288,0.5 0.5,1.17157288 0.5,2 L0.5,9.5 Z"></path>
            </g>
        </g>
    </g>
</svg>
  `)
}
