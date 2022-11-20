Функциональные компоненты с хуками в приоритете над классовыми.

Есть четкое разделение на умные и глупые компоненты ([умный](https://github.com/StillMortal/aston-react-2022/tree/master/src/components/Profile) и [глупый](https://github.com/StillMortal/aston-react-2022/tree/master/src/components/Profile/Cards/Card))

Есть рендеринг списков [1](https://github.com/StillMortal/aston-react-2022/blob/master/src/components/Profile/Cards/Cards.jsx), [2](https://github.com/StillMortal/aston-react-2022/blob/master/src/components/Search/Search.jsx)

Реализована хотя бы одна форма [SignUp](https://github.com/StillMortal/aston-react-2022/blob/master/src/components/SignUp/SignUp.jsx), [SignIn](https://github.com/StillMortal/aston-react-2022/blob/master/src/components/SignIn/SignIn.jsx), [SearchBar](https://github.com/StillMortal/aston-react-2022/blob/master/src/components/Profile/SearchBar/SearchBar.jsx)

Есть применение [предохранителя](https://github.com/StillMortal/aston-react-2022/blob/master/src/components/SignUp/SignUp.jsx)

Есть хотя бы один [кастомный хук](https://github.com/StillMortal/aston-react-2022/blob/master/src/components/Profile/SearchBar/use-debounce.js)

Поиск не должен триггерить много запросов к серверу (реализован [debounce](https://github.com/StillMortal/aston-react-2022/blob/master/src/components/Profile/SearchBar/SearchBar.jsx))
