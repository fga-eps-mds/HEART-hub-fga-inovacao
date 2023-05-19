import React from 'react';
import './Disciplinas.css'   
import { FiGithub,
  FiFigma,
  FiLinkedin,
  FiInstagram
} from "react-icons/fi";

const Disciplinas = () => {
    return (
        <section className='section'>
            <section className='first-section'>
                <div>
                    <h1 className='disciplinas'>Disciplinas</h1>
                    <p className='p-d'>
                        Na aba de <strong className='strong'>Disciplinas</strong>, é possível encontrar informações sobre as disciplinas oferecidas 
                        pela FGA, instituição de ensino superior que oferece cursos nas áreas de Engenharia e Tecnologia.  
                        As disciplinas da FGA são elaboradas com base nas necessidades do mercado de trabalho e nas  
                        tendências e inovações em cada área de atuação. Além disso, a instituição conta com uma equipe 
                        de professores altamente qualificados e experientes, que buscam oferecer um ensino de qualidade 
                        e atualizado.
                    </p>
                </div>
            </section>
            <section className='second-section'>
        
            </section>
            <section className='third-section'>
        
            </section>
            <div class="footer-basic">
                <footer>
                    <div class="social">
                      <a href="https://github.com/fga-eps-mds/2023.1-HEART-hub-fga-inovacao">
                        <i class="icon ion-social-instagram">
                          <FiGithub/>
                        </i>
                      </a>
                      <a href="#">
                        <i class="icon ion-social-snapchat">
                          <FiLinkedin/>
                        </i>
                      </a>
                      <a href="https://www.figma.com/file/oiha0mXD5eHoqBSWUEPlPR/Heart---HUB-FGA-Inova%C3%A7%C3%A3o?type=design&node-id=0%3A1&t=7mEIQJVT3hkgRnyL-1">
                        <i class="icon ion-social-twitter">
                          <FiFigma/>
                        </i>
                      </a>
                      <a href="#">
                        <i class="icon ion-social-facebook">
                          <FiInstagram/>
                        </i>
                      </a>
                    </div>
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="pedei">P&D&I</a></li>
                        <li class="list-inline-item"><a href="professores">Professores</a></li>
                        <li class="list-inline-item"><a href="empresasjuniores">Empresas Juniores</a></li>
                        <li class="list-inline-item"><a href="equipesdecompetição">Equipes de Competição</a></li>
                        <li class="list-inline-item"><a href="disciplinas">Disciplinas</a></li>
                        <li class="list-inline-item"><a href="editais">Editais</a></li>
                        <li class="list-inline-item"><a href="contatos">Contatos</a></li>
                    </ul>
                    <p class="copyright">Heart - HUB FGA Inovação © 2023</p>
                </footer>
            </div>
        </section>
    );
};

export default Disciplinas;