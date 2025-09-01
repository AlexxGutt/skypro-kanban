import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.read-the-docs {
  color: #888;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}

@keyframes card-animation {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #000000;
}

.calendar {
  width: 182px;
  margin-bottom: 20px;
}
.calendar__ttl {
  margin-bottom: 14px;
  padding: 0 7px;
}
.calendar__p {
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
}
.calendar__p span {
  color: #000000;
}
.calendar__block {
  display: block;
}
.calendar__month {
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
}
.calendar__content {
  margin-bottom: 12px;
}
.calendar__days-names {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
}
.calendar__day-name {
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
}
.calendar__cells {
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
}
.calendar__cell {
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
}
.calendar__nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
}
.calendar__period {
  padding: 0 7px;
}

.nav__actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav__action {
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav__action svg {
  fill: #94a6be;
}

._other-month {
  opacity: 0;
}

._cell-day:hover {
  color: #94a6be;
  background-color: #eaeef6;
}

._active-day {
  background-color: #94a6be;
  color: #ffffff;
}

._current {
  font-weight: 700;
}

@media screen and (max-width: 660px) {
  .calendar {
    max-width: 340px;
    width: 100%;
  }
  .calendar__ttl,
  .calendar__nav,
  .calendar__period {
    padding: 0;
  }
  .calendar .date-create {
    display: none;
    margin-bottom: 7px;
  }
  .calendar__p {
    font-size: 14px;
  }
  .calendar__day-name {
    font-size: 14px;
  }
  .calendar__cells {
    width: 344px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .calendar__cell {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
}
@media screen and (max-width: 495px) {

  .pop-new-card__calendar {
    width: 100%;
  }
  .pop-browse__calendar {
    width: 100%;
  }
}
`;
