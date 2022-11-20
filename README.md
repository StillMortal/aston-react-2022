Функциональные компоненты с хуками в приоритете над классовыми.

Есть четкое разделение на умные и глупые компоненты ([умный](https://github.com/StillMortal/aston-react-2022/tree/master/src/components/Profile) и [глупый](https://github.com/StillMortal/aston-react-2022/tree/master/src/components/Profile/Cards/Card))

Есть рендеринг списков [1](https://github.com/StillMortal/aston-react-2022/blob/master/src/components/Profile/Cards/Cards.jsx), [2](https://github.com/StillMortal/aston-react-2022/blob/master/src/components/Search/Search.jsx)

Реализована хотя бы одна форма [SignUp](https://github.com/StillMortal/aston-react-2022/blob/master/src/components/SignUp/SignUp.jsx), [SignIn](https://github.com/StillMortal/aston-react-2022/blob/master/src/components/SignIn/SignIn.jsx), [SearchBar](https://github.com/StillMortal/aston-react-2022/blob/master/src/components/Profile/SearchBar/SearchBar.jsx)

Есть применение [предохранителя](https://github.com/StillMortal/aston-react-2022/blob/master/src/components/SignUp/SignUp.jsx)

Есть хотя бы один [кастомный хук](https://github.com/StillMortal/aston-react-2022/blob/master/src/components/Profile/SearchBar/use-debounce.js)

Хотя бы несколько компонентов используют PropTypes (https://ru.reactjs.org/docs/typechecking-with-proptypes.html)
Поиск не должен триггерить много запросов к серверу (https://ru.reactjs.org/docs/faq-functions.html#how-can-i-prevent-a-function-from-being-called-too-quickly-or-too-many-times-in-a-row)
Есть применение lazy + Suspense (https://ru.reactjs.org/docs/code-splitting.html#route-based-code-splitting)
