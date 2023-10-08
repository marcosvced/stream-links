<script setup lang="ts">

import { ComputedRef } from 'vue'

interface Link {
  name: string
  acestreamId: string
}

const links: Link[] = [
  { name: 'La1', acestreamId: '02b9307c5c97c86914cc5939d6bbeb5b4ec60b47' },
  { name: 'La1 UHD', acestreamId: '6636a5c1055b5913ddcd0e87a5523f7d935350af' },
  { name: 'La 2', acestreamId: '60106275d34f995e26bb2cc4a21a42f586c6c555' },
  { name: 'Movistar LaLiga 4K', acestreamId: 'dce1579e3a2e5bd29071fca8eae364f1eb3205cf' },
  { name: 'Movistar LaLiga 1080P', acestreamId: 'aa82e7d4f03061f2144a2f4be22f2e2210d42280' },
  { name: 'Movistar LaLiga 1080 MultiAudio', acestreamId: '7d8c87e057be98f00f22e23b23fbf08999e4b02f' },
  { name: 'Movistar LaLiga 1080 MultiAudio', acestreamId: '1969c27658d4c8333ab2c0670802546121a774a5' },
  { name: 'Movistar LaLiga 720', acestreamId: 'f031f5728b32f6089dda28edebe990cf198108d8' },
  { name: 'Movistar LaLiga 2 1080', acestreamId: '26029f72a4ca831d09deefe89534818db1d105bc' },
  { name: 'Movistar LaLiga 2 720', acestreamId: '80126b240f3e4e004754fd8f8103e857ab2556a0' },
  { name: 'Movistar LaLiga 3 1080', acestreamId: '4c4844564313e39a888f593511f299f5ba3cf929' },
  { name: 'Movistar LaLiga 4 1080', acestreamId: 'aa8f826da70e27a26b29c7b32402f17e8a67a8b0' },
  { name: 'Movistar LaLiga 5 1080', acestreamId: '535394f62a810bc5aeb25be75ea5ff7d03e070b2' },
  { name: 'Movistar LaLiga 6 1080', acestreamId: 'c896d37778f9e43549a788fc22206a655895b51b' },
  { name: 'DAZN LaLiga 1080 MultiAudio', acestreamId: '1960a9be8ae9e8c755330218eac4c5805466290a' },
  { name: 'DAZN LaLiga 1080 MultiAudio', acestreamId: '75251ba975132ec9a202806ba5bf606e87280c96' },
  { name: 'DAZN LaLiga 720', acestreamId: 'a3bca895c58d3fc7d5e4259d3d5e3cf0291d1914' },
  { name: 'DAZN LaLiga 2 1080 MultiAudio', acestreamId: '93d663e92a93845b11c9831885646fa39ba1ed66' },
  { name: 'DAZN LaLiga 2 720 MultiAudio', acestreamId: '0950c37fe1ea817fc561c611ae943d58505f7a79' },
  { name: 'DAZN LaLiga 3 1080 MultiAudio', acestreamId: '8c71f0e0a5476e10950fc827f9d2a507340aba74' },
  { name: 'DAZN LaLiga 4 1080 MultiAudio', acestreamId: '2792a8a5f4a3f53cd72dec377a2639cd12a6973e' },
  { name: 'DAZN LaLiga 5 1080 MultiAudio', acestreamId: '99e544cddbee13798e854c1009ee7d1a93fdedf7' },
  { name: 'LaLiga Smartbank 1080', acestreamId: '4c46585214b23b1d802ef2168060c7649a3894cf' },
  { name: 'LaLiga Smartbank 720', acestreamId: '06b367c22394a1358c9cefa0cb5d0b64b9b2b3f4' },
  { name: 'LaLiga Smartbank 2 1080', acestreamId: 'd81b4f2f3fde433539c097b2edc9b587ca47b087' },
  { name: 'LaLiga Smartbank 2 720', acestreamId: '2709d0ab86cb6ce7ba4d3ad188d7fa80668f2924' },
  { name: 'LaLiga Smartbank 3', acestreamId: '59ba45b79152e4599144177b234f6491fc19db53' },
  { name: 'LaLiga Smartbank 4', acestreamId: '2cacf21476b036e319bcb7c7e747766e6ccc082e' },
  { name: 'LaLiga Smartbank 5', acestreamId: 'a1146358aa50c99c887108b17f62f9264186a16a' },
  { name: 'LaLiga Smartbank 6', acestreamId: '7a9bb1b9cccb759c44ed84f3c1283922e6854670' },
  { name: 'LaLiga Smartbank 7', acestreamId: '446e73a22582921393b020ed08b768ad8e14d754' },
  { name: 'LaLiga Smartbank 8', acestreamId: '4d52fc1994fe927702aeb7bc8778e2f23b1260e2' },
  { name: 'MovistarPlus 1080', acestreamId: '5a236fbbe6e5bbfec03db548c244a7c858d675c0' },
  { name: '#Vamos 1080', acestreamId: '859bb6295b8d0f224224d3063d9db7cdeca03122' },
  { name: '#Vamos 720', acestreamId: '3bba7c95857c2502c7e03ced1a6a9b00eb567fa0' },
  { name: '#Ellas 1080', acestreamId: '67654e63b5065cdaa6c8e8d41bb5428b42b32830' },
  { name: 'Movistar Deportes 1080', acestreamId: 'd00223931b1854163e24c5c22475015d7d45c112' },
  { name: 'Movistar Deportes 720', acestreamId: 'e5fa927d9a017f4523fdb62774a0aec457985bfa' },
  { name: 'Movistar Deportes 2 1080', acestreamId: 'e6f06d697f66a8fa606c4d61236c24b0d604d917' },
  { name: 'Movistar Deportes 3 1080', acestreamId: 'aee0a595220e0f1c2fee725fd1dbc602d7152a9a' },
  { name: 'Movistar Deportes 4 1080', acestreamId: '42e83c337ece0af9ca7808859f84c7960e9cb6f5' },
  { name: 'Movistar Deportes 5 1080', acestreamId: 'b1e5abc48195b7ca9b2ee1b352e790eb9f7292e3' },
  { name: 'Movistar Deportes 6 720', acestreamId: '8587ed8ac36ac477e1d4176d3159a38bd154d4ce' },
  { name: 'Movistar deportes 7 1080', acestreamId: '2448f1d084f440eed2fbe847e24f1c02f5659a78' },
  { name: 'Movistar L. Campeones 1080 MultiAudio', acestreamId: '931b1984badcb821df7b47a66ac0835ac871b51c' },
  { name: 'Movistar L. Campeones 1080 MultiAudio', acestreamId: '045718bad2ddb4f03b1a420754a97a23ad8b493b' },
  { name: 'Movistar L. Campeones 720', acestreamId: 'e2e2aca792aae5da19995ac516b1d620531bd49c' },
  { name: 'Movistar L. Campeones 2 1080', acestreamId: 'fc2fe31b0bce25e2dc7ab4d262bf645e2be5a393' },
  { name: 'Movistar L. Campeones 2 720', acestreamId: '6753492c1908274c268a1b28e2a054a0ff8f86f9' },
  { name: 'Movistar L. Campeones 3 1080', acestreamId: 'ad372cba73aa0ece207a79532b3e30b731136bb2' },
  { name: 'Movistar L. Campeones 3 720', acestreamId: 'd59fe9978eed49f256b312a60671b5bce43d3f24' },
  { name: 'Movistar L. Campeones 4 SD', acestreamId: '1a1b528109edead1904e3dbff575637a452dd1fa' },
  { name: 'Movistar L. Campeones 5 SD', acestreamId: '4b4a77f005ea45e57276ff9d90c3830b3c59010d' },
  { name: 'Movistar L. Campeones 6 SD', acestreamId: 'e9950ec551124c490ecbc2526a83d2c5a4516293' },
  { name: 'Movistar L. Campeones 7 SD', acestreamId: 'd84a90adb6998083403f610ab3fae340b5711b1e' },
  { name: 'Movistar L. Campeones 8 SD', acestreamId: 'fdd9e3660059051660dbd7857443c2b807f258d0' },
  { name: 'Movistar L. Campeones 9 SD', acestreamId: '69c95dc47b35dde559a6ef025c1b91c89646a17f' },
  { name: 'Movistar L. Campeones 10 SD', acestreamId: 'df67afe5c5f5e82a3ae629d126727b006b65e676' },
  { name: 'Movistar L. Campeones 11 SD', acestreamId: '57e284a3c13100baeff7a88dc50949585c9f1277' },
  { name: 'Movistar L. Campeones 12 SD', acestreamId: '33369549c635dabdb78b95c478c21fcc9e4ee854' },
  { name: 'Movistar Golf 1080', acestreamId: '4f945b0ba4206fa2676b61e9eaa465ac3dcc8122' },
  { name: 'Movistar Golf2 1080', acestreamId: '9a4f3ae6563668b7709dac509dedc709441b3fd9' },
  { name: 'DAZN 1 1080', acestreamId: '8ca07071b39185431f8e940ec98d1add9e561639' },
  { name: 'DAZN 1 720', acestreamId: 'eaff9293c76a324c750ef5094c2a4e2c96518d1f' },
  { name: 'DAZN 2 1080', acestreamId: '60dbeeb299ec04bf02bc7426d827547599d3d9fc' },
  { name: 'DAZN 2 720', acestreamId: '7aa402bab9fff43258fbcf401881a39475f30aaf' },
  { name: 'DAZN 3 1080', acestreamId: 'a8ffddef56f082d4bb5c0be0d3d2fdd8c16dbd97' },
  { name: 'DAZN 4 1080', acestreamId: '2fcdf7a19c0858f686efdfabd3c8c2b92bf6bcfd' },
  { name: 'DAZN F1 UHD (Fórmula 1)', acestreamId: '6b94479c24898700089e6b87d28a3ccc72dc4041' },
  { name: 'DAZN F1 1080 (Fórmula 1)', acestreamId: '5789ca155323664edd293b848606688edf803f4d' },
  { name: 'DAZN F1 1080 (Fórmula 1)', acestreamId: '9dad717d99b29a05672166258a77c25b57713dd5' },
  { name: 'DAZN F1 720 (Fórmula 1)', acestreamId: 'e1fcad9de0c782c157fde6377805c58297ab65c2' },
  { name: 'EuroSport 1 1080', acestreamId: '5e4cd48c79f991fcbee2de8b9d30c4b16de3b952' },
  { name: 'EuroSport 2 1080', acestreamId: 'c373da9e901d414b7384e671112e64d5a2310c29' },
  { name: 'GOL TV 1080', acestreamId: 'd4627f7b6b237a8556819445b3283d866caceca2' },
  { name: 'tdp 1080', acestreamId: 'e2395d28ad19423212fd3aa0e81f387db3e8bb9f' },
  { name: 'Tennis Channel', acestreamId: '9292d3b32432efb56db4014933cbdec0a7cf2e36' },
  { name: 'CUATRO 1080', acestreamId: 'e8eec35f4662be1af96963245bfa88fb7d0242c4' },
  { name: 'BeMad 1080', acestreamId: '5c267a00f264736c1d47c1cc3e754447ca8f770c' },
  { name: 'Telecinco 1080', acestreamId: 'bb1982ae8d2d409d4ccd7a9f498042684e3532b5' },
  { name: 'Sport Tv 1 1080', acestreamId: 'ce235921dac95e1da2dd5e54673c2fecb9e806de' },
  { name: 'Sport Tv 2 1080', acestreamId: '396d82ca6f5445abcd32e6b609d67e332ee12ace' },
  { name: 'Sport Tv 3 1080', acestreamId: 'f8cb9d9e3077eb3ae417b2d95a69c5f590760eb9' },
  { name: 'beIN SPORTS', acestreamId: '41af6926a6010b68ba2540975761436bb077748f' },
  { name: 'Barça 720', acestreamId: 'e3362507e7c732b9461bd7bdc74bd054c49b3ba7' },
  { name: 'Real Madrid TV 1080', acestreamId: '0ec3f3786318acd8dca2588f74c3759cda76cd11' },
  { name: 'Real Madrid TV 720', acestreamId: '0827cf7d290967985892965c6e61244a479d6dcd' },
  { name: 'Dazn liga F1', acestreamId: 'd6cdd724a97fcf851e7ef641c28d6beb8663496e' },
  { name: 'Dazn liga F2', acestreamId: '4af5952b95d3c2e99fcdc0de2f528d3fcd73e06b' },
  { name: 'Dazn liga F3', acestreamId: '162942adc047d0f78eac056effbe5bbec54a5e51' },
  { name: 'Dazn liga F4', acestreamId: 'e454681a152a86da504e63694f17f90d0586867d' },
  { name: 'Wimbledon UHD', acestreamId: '78aa81aedb1e2b6a9ba178398148940857155f6a' },
  { name: 'Mundo Toro HD', acestreamId: 'f763ab71f6f646e6c993f37e237be97baf2143ef' },
  { name: 'NBA', acestreamId: 'e72d03fb9694164317260f684470be9ab781ed95' },
]

const filter = ref('')

const accestreamIds:ComputedRef<Link[]> = computed(() => links.filter(link => link.name.toLocaleLowerCase().includes(filter.value?.toLocaleLowerCase() ?? '')))

</script>

<template>
  <div class='p-links'>
    <input type='text' @input='filter = $event.target.value'>
    <ul>
      <li v-for='channel in accestreamIds' :key='channel.acestreamId'>
        <nuxt-link :to='`acestream://${channel.acestreamId}`'>
          {{ channel.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
