import {useTranslation} from 'react-i18next'

export default function App(){
const {t, i18n} = useTranslation('common');

 const Handler = ()=>{
  i18n.changeLanguage('ben')
 }

  return(
    <div>
      <button onClick={Handler}>Bengla</button>
      {t("home")}
    </div>
  )
}
