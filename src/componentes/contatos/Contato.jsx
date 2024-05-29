import Link from './Link.jsx';
import { Contatos } from './styles.js';

const ListContatos = [
    {
        href:"mailto:dehjr1990@gmail.com?subject=PORTIFÓLIO | CONTATO]&body=Olá, vim pelo seu portifólio.",
        image:"cont01",
        text:"E-mail"
    },
    {
        href:"https://wa.me/5511987554210?text=Ol%C3%A1%2C+vim+pelo+seu+portif%C3%B3lio.",
        image:"cont02",
        text:"Whatsapp"
    },
    {
        href:"https://www.linkedin.com/in/denilson-junior-b80713115/",
        image:"cont03",
        text:"Linkedin"
    },
    {
        href:"https://github.com/DenilsonJunior",
        image:"cont04",
        text:"GitHub"
    }
]

function Contato() {
    return (
        <Contatos id="cont">
            <div className='max-conteudo'>
                <h1>Contatos</h1>
                <div className='list'>
                    {
                        ListContatos.map(function(item, index) {
                            return (
                                <Link
                                    key={index} 
                                    href={item.href}
                                    image={item.image}
                                    text={item.text}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </Contatos>
    )
}

export default Contato