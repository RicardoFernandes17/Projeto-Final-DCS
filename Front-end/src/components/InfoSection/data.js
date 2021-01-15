import imgBraga from '../../images/braga.jpg'
import imgPorto from '../../images/porto.jpg'
import imgLisboa from '../../images/lisboa.jpg'

export const homeObjBraga = {
    id: 'braga',
    lightBg: false,
    lightText: true,
    lightTextText: true,
    topLine: 'Braga',
    headline: 'Descubra as melhores vistas de Braga',
    description: 'Localizada a norte, Braga é conhecida como a "Roma" Portuguesa e é a cidade mais antiga de Portugal.',
    buttonLabel: 'Braga',
    imgStart: false,
    img: imgBraga,
    alt: 'em Braga',
    dark: false,
    primary: false,
    darkText: false
}

export const homeObjPorto = {
    id: 'porto',
    lightBg: true,
    lightText: false,
    lightTextText: false,
    topLine: 'Porto',
    headline: 'Descubra os melhores locais do Porto',
    description: 'Localizado a norte, as pontes e os vinhas trazem milhares ao Porto todos os anos.',
    buttonLabel: 'no Porto',
    imgStart: true,
    img: imgPorto,
    alt: 'Braga',
    dark: true,
    primary: true,
    darkText: true
}

export const homeObjLisboa = {
    id: 'lisboa',
    lightBg: false,
    lightText: true,
    lightTextText: true,
    topLine: 'Lisboa',
    headline: 'Viaje em Lisboa',
    description: 'Localizada a centro, Lisboa é a capital de Portugal.',
    buttonLabel: 'em Lisboa',
    imgStart: false,
    img: imgLisboa,
    alt: 'Braga',
    dark: false,
    primary: false,
    darkText: false
}