import Layout from '../components/MyLayout.js'
import _JSXStyle from 'styled-jsx/style'

export default () => (
  <Layout>
    <div className="pageWrapper2">
      <article>
        <h1>Om Spinnfiskeklubben Vinga</h1>
        <h2 className="bilder"><a href="https://photos.app.goo.gl/4Dt2DLGGS6JXNMJu6">Bilder från Rävholmen</a></h2>
        <p>
        Föreningen har funnits sedan 1945 och har sedan 1946 haft sin verksamhet på
        ön Stora Rävholmen i Göteborgs södra skärgård. På den tiden kunde man åka ut
        till Rävholmen året runt med skärgårdsbåten. Föreningen var stor (150
        medlemmar och en damsektion med 12 medlemmar) och aktiv året runt.
        </p>
        <p>
        Sedan flera år tillbaka går det ingen reguljär trafik till ön, så vi får ta ekan eller
        jollen sista biten. Detta gör att vi är beroende av att vädret är ”bra” och att det
        inte blåser för mycket, och när det blåser - att det blåser ifrån rätt håll.
        </p>
        <p>
        Just nu är vi en liten förening med 33 medlemmar som kämpar för att föreningen
        skall finnas kvar. Vingaklubben genomgår just nu en generationsväxling vilket
        gör att olika poster kan vara svåra att tillsätta. Behovet av nya medlemmar är
        stort, så alla har vi med oss gäster till ön – med en förhoppning om att våra
        gäster är blivande medlemmar!
        </p>
        <p>
        Verksamheten pågår året runt. Under högsäsongen blir det på Rävholmen och
        under lågsäsongen gäller styrelsemöten och medlemsmöten.
        </p>
        <p>
        Nästan alla medlemmar som åker ut till Rävholmen brukar ta sig en runda på ön
        med fiskespöet i högsta hugg. De flesta har en favoritplats/udde där de brukar
        avsluta ”vandringen runt ön”. En del medlemmar brukar låna klubbens eka och
        ”ligger å driver” några timmar, nästan runt hela ön, med önskan om napp.
        </p>
        <p>
        När det är säsongsöppning/stängning brukar vi även försöka hinna med att ha en
        fisketävling.
        </p>
        <p>
        Vi måste även lägga ner tid på underhåll av klubbhuset, dasset, båtarna och
        bryggorna. När kvällen kommer så samlas vi vid grillen och bara njuter av
        kvällen och av gemenskapen som föreningen ger.
        </p>
      </article>
      <aricle>
        <h2>Kontakt</h2>
        <p>Annette N <a href="info@spinnfiskeklubbenvinga.se">info@spinnfiskeklubbenvinga.se</a></p>
        <p>Anna N <a href="mailto:anna@spinnfiskeklubbenvinga.se">anna@spinnfiskeklubbenvinga.se</a></p>
      </aricle>
      <article>
        <h2>Sponsorer</h2>
        <p>Betonghåltagarna AB Huskvarna</p>
        <p>BHT sanering Huskvarna</p>
        <p>Tyrolit AB</p>
        <p>V-TECH AB Västra Höreda</p>
        <p>Cramo trade Jönköping</p>
        <p>Draka Kabel Nässjö AB</p>
        <p>Sto Scandinavia AB</p>
      </article>
    </div>
    <_JSXStyle styleId="pageWrapper2" css={`
      div.pageWrapper2 {
        width: 85%;
        margin: 25px auto;
      }
      h2.bilder {
        text-align: center;
        padding: 15px;
      }
      h2 {
        margin-top: 20px !important;
      }
    `} />
  </Layout>
)
