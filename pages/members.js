import Layout from '../components/MyLayout.js'
import _JSXStyle from 'styled-jsx/style'

export default () => (
  <Layout>
    <div className="pageWrapper">
      <h2>Årsavgifter</h2>
      <table>
        <tr>
          <td>Aktiv medlem</td>
          <td>950kr</td>
        </tr>
        <tr>
          <td>Fam.medlem vuxen</td>
          <td>250kr</td>
        </tr>
        <tr>
          <td>Fam.medlem (barn /junior t.o.m. 17 år)</td>
          <td>0 kr</td>
        </tr>
        <tr>
          <td>Familj maximalt</td>
          <td>1 200kr*</td>
        </tr>
        <tr>
          <td>Pensionär</td>
          <td>175 kr</td>
        </tr>
        <tr>
          <td>Stödmedlem</td>
          <td>300kr</td>
        </tr>
      </table>
      <h3>Utökat medlemskap</h3>
      <p>
    Man betalar ett fast högre pris och har därmed fria övernattningsnätter, fria dagbesök, fri tillgång till ekan men - betalar för bensinen som man använder – och återlämnar ekan med full tank.
      </p>
      <table>
        <tr>
          <td>Ensam medlem</td>
          <td>3 000kr</td>
        </tr>
        <tr>
          <td>Par (gifta, sambor, partnerskap)</td>
          <td>4 000kr*</td>
        </tr>
        <tr>
          <td>Familj</td>
          <td>4 500kr*</td>
        </tr>
      </table>

      <h3>Övrigt – bra - info</h3>
      <p>I medlemsavgiften ingår en medlemsförsäkring, vilket innebär att du är försäkrad när du utför en uppgift för vingaklubben.
Du har även tillgång till vingaklubbens stuga i Göteborgs Södra skärgård.</p>
      <p>*Från 18 år har man eget medlemskap och har tillåtelse att - vara själv -  ute på Rävholmen.   Därför betalar man som vuxen från det år man fyller 18 år.
      </p>
      <h2><a href="https://www.facebook.com/groups/1502943549926631/">Facebook grupp för medlemmar</a></h2>
      <p>Bankgiro: 5073-8541</p>
    </div>
    <_JSXStyle styleId="pageWrapper" css={`
      div.pageWrapper {
        width: 85%;
        margin: 25px auto;
      }
      td {
        padding: 5px !important;
      }
      h2 {
        margin-top: 20px !important;
      }
      h3 {
        margin-top: 15px !important;
      }
    `} />
  </Layout>
)
