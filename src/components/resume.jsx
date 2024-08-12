import s from "./resume.module.css";

const resume = () => {
  return (
    <div>
      <div class="wrapper">
        <div class="Main-content">
          <div class="my-info">
            <h2 class="my-profession">Mining engineer</h2>

            <h1 class="my-name">Ivan YAKOVIV</h1>

            <p class="my-descr">Omnia mea mecum porto</p>
          </div>

          <div class="work-experience">
            <h3 class="work-experience-title">Work experience</h3>

            <div class="work-experience-container">
              <h4 class="work-experience-company">
                Technical director <span class="company">"Dashava"Ltd</span>
              </h4>
              <p class="work-experience-period">
                September 2023 - up to now <span class="separator">|</span>
                Country
              </p>
              <ul class="work-experience-duties-list">
                <li class="work-experience-duties-item">
                  Control of underground and capital repairs of wells
                </li>
                <li class="work-experience-duties-item">
                  Carrying out work on the intensification of oil production
                  from wells
                </li>
                <li class="work-experience-duties-item">
                  Preparation of plans for underground and capital repairs of
                  wells
                </li>
                <li class="work-experience-duties-item">
                  Preparation of plans for intensification of oil production
                  from wells
                </li>
              </ul>
            </div>

            <div class="work-experience-container">
              <h4 class="work-experience-company">
                Head of the Lokachinsky oil and gas production workshop
                <span class="company">JSC "Ukrgazproduction"</span>
              </h4>
              <p class="work-experience-period">
                August 2001 — November 2022
                <span class="separator">|</span> Country
              </p>
              <ul class="work-experience-duties-list">
                <li class="work-experience-duties-item">
                  Management of the oil and gas production workshop
                </li>
                <li class="work-experience-duties-item">
                  Operation of the installation for gas purification from
                  hydrogen sulfide supplied by the company "BSI Industries"
                </li>
                <li class="work-experience-duties-item">
                  Operation of the electricity generation installation supplied
                  by the company "Solar Turbines"
                </li>
              </ul>
            </div>

            <div class="work-experience-container">
              <h4 class="work-experience-company">
                Engineer of the Lokachinsky oil and gas industry
                <span class="company">JSC "Ukrgazproduction"</span>
              </h4>
              <p class="work-experience-period">
                January 1999 — August 2001
                <span class="separator">|</span> Country
              </p>
              <ul class="work-experience-duties-list">
                <li class="work-experience-duties-item">
                  Development of the Lokachinsky gas field
                </li>
                <li class="work-experience-duties-item">
                  Construction of a complex gas preparation unit (UCPG)-Lokachi
                </li>
                <li class="work-experience-duties-item">
                  Deconservation and connection of wells to the UCPG-Lokachi
                </li>
                <li class="work-experience-duties-item">
                  Operation of a complex gas preparation unit UCPG-Lokachi
                </li>
              </ul>
            </div>

            <div class="work-experience-container">
              <h4 class="work-experience-company">
                Drilling control engineer
                <span class="company">SE Ukrtransgaz</span>
              </h4>
              <p class="work-experience-period">
                August 1994 - December 1998
                <span class="separator">|</span> Country
              </p>
              <ul class="work-experience-duties-list">
                <li class="work-experience-duties-item">
                  Control over the drilling of exploitation wells of the
                  Lokachinsky gas field
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 class="education-title">Education</h3>
            <p class="education-university">
              Ivano-Frankivsk National Technical University of Oil and Gas
            </p>
            <p class="education-profession">
              Development and operation of oil and gas fields
            </p>
            <p class="education-period">
              September 1985 - June 1994 <span class="separator">|</span>{" "}
              Country
            </p>
          </div>
        </div>

        <aside class="sidebar">
          <img
            class="my-photo"
            src="img/unnamed.jpg"
            alt="My photo"
            width="370"
          />
          <div class="sidebar-content">
            <div class="contacts-container">
              <h3 class="contacts-title">Contacts</h3>
              <p class="contacns-item">
                <span class="contacts-type">C:</span>
                <a class="contacts-link" href="tel:+380503174219">
                  +380 50 317 42 19
                </a>
              </p>
              <p class="contacns-item">
                <span class="contacts-type">E:</span>
                <a class="contacts-link" href="mailto:ivasykvv@gmail.com">
                  ivasykvv@gmail.com
                </a>
              </p>
            </div>

            <div class="skills-container">
              <h3 class="skills-title">Tech skills</h3>
              <ul class="skills-list">
                <li class="skills-list-item">Engineering</li>
                <li class="skills-list-item">Drilling wells</li>
                <li class="skills-list-item">Gas production</li>
                <li class="skills-list-item">Oil production</li>
                <li class="skills-list-item">
                  Gas purification from hydrogen sulfide
                </li>
                <li class="skills-list-item">
                  Operation of gas turbine power plants
                </li>
                <li class="skills-list-item">Overhaul of wells</li>
              </ul>
            </div>

            <div class="skills-container">
              <h3 class="skills-title">Soft skills</h3>
              <ul class="skills-list">
                <li class="skills-list-item">Management</li>
                <li class="skills-list-item">Geology</li>
                <li class="skills-list-item">Oil and gas field development</li>
                <li class="skills-list-item">Teamwork</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default resume;
