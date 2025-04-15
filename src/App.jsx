import "./App.css";
import PopBrowse from "./components/PopUp/PopBrowse";
import PopExit from "./components/PopUp/PopExit";
import PopNewCard from "./components/PopUp/PopNewCard";

function App() {
  return (
    <>
      <div class="wrapper">
        {/* <!-- pop-up start--> */}
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        {/* <!-- pop-up end--> */}

        <header class="header">
          <div class="container">
            <div class="header__block">
              <div class="header__logo _show _light">
                <a href="" target="_self">
                  <img src="images/logo.png" alt="logo" />
                </a>
              </div>
              <div class="header__logo _dark">
                <a href="" target="_self">
                  <img src="images/logo_dark.png" alt="logo" />
                </a>
              </div>
              <nav class="header__nav">
                <button class="header__btn-main-new _hover01" id="btnMainNew">
                  <a href="#popNewCard">Создать новую задачу</a>
                </button>
                <a href="#user-set-target" class="header__user _hover02">
                  Ivan Ivanov
                </a>
                <div
                  class="header__pop-user-set pop-user-set"
                  id="user-set-target"
                >
                  {/* <!-- <a href="">x</a> --> */}
                  <p class="pop-user-set__name">Ivan Ivanov</p>
                  <p class="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                  <div class="pop-user-set__theme">
                    <p>Темная тема</p>
                    <input type="checkbox" class="checkbox" name="checkbox" />
                  </div>
                  <button type="button" class="_hover03">
                    <a href="#popExit">Выйти</a>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </header>
        <main class="main">
          <div class="container">
            <div class="main__block">
              <div class="main__content">
                <div class="main__column column">
                  <div class="column__title">
                    <p>Без статуса</p>
                  </div>
                  <div class="cards">
                    <div class="cards__item">
                      <div class="cards__card card">
                        <div class="card__group">
                          <div class="card__theme _orange">
                            <p class="_orange">Web Design</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div class="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div class="card__content">
                          <a href="" target="_blank">
                            <h3 class="card__title">Название задачи</h3>
                          </a>
                          <div class="card__date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1_415)">
                                <path
                                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                                  stroke="#94A6BE"
                                  stroke-width="0.8"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                                  stroke="#94A6BE"
                                  stroke-width="0.8"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="cards__item">
                      <div class="cards__card card">
                        <div class="card__group">
                          <div class="card__theme _green">
                            <p class="_green">Research</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div class="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div class="card__content">
                          <a href="" target="_blank">
                            <h3 class="card__title">Название задачи</h3>
                          </a>
                          <div class="card__date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1_415)">
                                <path
                                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                                  stroke="#94A6BE"
                                  stroke-width="0.8"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                                  stroke="#94A6BE"
                                  stroke-width="0.8"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="cards__item">
                      <div class="cards__card card">
                        <div class="card__group">
                          <div class="card__theme _orange">
                            <p class="_orange">Web Design</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div class="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div class="card__content">
                          <a href="" target="_blank">
                            <h3 class="card__title">Название задачи</h3>
                          </a>
                          <div class="card__date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1_415)">
                                <path
                                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                                  stroke="#94A6BE"
                                  stroke-width="0.8"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                                  stroke="#94A6BE"
                                  stroke-width="0.8"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="cards__item">
                      <div class="cards__card card">
                        <div class="card__group">
                          <div class="card__theme _purple">
                            <p class="_purple">Copywriting</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div class="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div class="card__content">
                          <a href="" target="_blank">
                            <h3 class="card__title">Название задачи</h3>
                          </a>
                          <div class="card__date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1_415)">
                                <path
                                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                                  stroke="#94A6BE"
                                  stroke-width="0.8"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                                  stroke="#94A6BE"
                                  stroke-width="0.8"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="cards__item">
                      <div class="cards__card card">
                        <div class="card__group">
                          <div class="card__theme _orange">
                            <p class="_orange">Web Design</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div class="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div class="card__content">
                          <a href="" target="_blank">
                            <h3 class="card__title">Название задачи</h3>
                          </a>
                          <div class="card__date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1_415)">
                                <path
                                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                                  stroke="#94A6BE"
                                  stroke-width="0.8"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                                  stroke="#94A6BE"
                                  stroke-width="0.8"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="main__column">
                  <div class="column__title">
                    <p>Нужно сделать</p>
                  </div>
                  <div class="cards">
                    <div class="cards__item">
                      <div class="cards__card card">
                        <div class="card__group">
                          <div class="card__theme _green">
                            <p class="_green">Research</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div class="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div class="card__content">
                          <a href="" target="_blank">
                            <h3 class="card__title">Название задачи</h3>
                          </a>
                          <div class="card__date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1_415)">
                                <path
                                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                                  stroke="#94A6BE"
                                  stroke-width="0.8"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                                  stroke="#94A6BE"
                                  stroke-width="0.8"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="main__column">
                  <div class="column__title">
                    <p>В работе</p>
                  </div>
                  <div class="cards">
                    <div class="cards__item">
                      <div class="cards__card card">
                        <div class="card__group">
                          <div class="card__theme _green">
                            <p class="_green">Research</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div class="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div class="card__content">
                          <a href="" target="_blank">
                            <h3 class="card__title">Название задачи</h3>
                          </a>
                          <div class="card__date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1_415)">
                                <path
                                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                                  stroke="#94A6BE"
                                  stroke-width="0.8"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                                  stroke="#94A6BE"
                                  stroke-width="0.8"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="cards__item">
                      <div class="cards__card card">
                        <div class="card__group">
                          <div class="card__theme _purple">
                            <p class="_purple">Copywriting</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div class="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div class="card__content">
                          <a href="" target="_blank">
                            <h3 class="card__title">Название задачи</h3>
                          </a>
                          <div class="card__date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1_415)">
                                <path
                                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                                  stroke="#94A6BE"
                                  stroke-width="0.8"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                                  stroke="#94A6BE"
                                  stroke-width="0.8"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="cards__item">
                      <div class="cards__card card">
                        <div class="card__group">
                          <div class="card__theme _orange">
                            <p class="_orange">Web Design</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div class="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div class="card__content">
                          <a href="" target="_blank">
                            <h3 class="card__title">Название задачи</h3>
                          </a>
                          <div class="card__date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1_415)">
                                <path
                                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                                  stroke="#94A6BE"
                                  stroke-width="0.8"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                                  stroke="#94A6BE"
                                  stroke-width="0.8"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="main__column">
                  <div class="column__title">
                    <p>Тестирование</p>
                  </div>
                  <div class="cards">
                    <div class="cards__item">
                      <div class="cards__card card">
                        <div class="card__group">
                          <div class="card__theme _green">
                            <p class="_green">Research</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div class="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div class="card__content">
                          <a href="" target="_blank">
                            <h3 class="card__title">Название задачи</h3>
                          </a>
                          <div class="card__date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1_415)">
                                <path
                                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                                  stroke="#94A6BE"
                                  stroke-width="0.8"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                                  stroke="#94A6BE"
                                  stroke-width="0.8"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="main__column">
                  <div class="column__title">
                    <p>Готово</p>
                  </div>
                  <div class="cards">
                    <div class="cards__item">
                      <div class="cards__card card">
                        <div class="card__group">
                          <div class="card__theme _green">
                            <p class="_green">Research</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div class="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div class="card__content">
                          <a href="" target="_blank">
                            <h3 class="card__title">Название задачи</h3>
                          </a>
                          <div class="card__date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1_415)">
                                <path
                                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                                  stroke="#94A6BE"
                                  stroke-width="0.8"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                                  stroke="#94A6BE"
                                  stroke-width="0.8"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
