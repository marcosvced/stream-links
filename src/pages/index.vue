<script setup lang="ts">
import { ComputedRef } from 'vue'
import AInput from '~/lib/ui/components/a-input.vue'

interface Link {
  name: string
  resolution: string
  streamId: string
}

const links: Link[] = [
  // DAZN F1
  { name: 'DAZN F1 (Fórmula 1)', resolution: '1080', streamId: 'd6281d4e6310269b416180442a470d23a4a99dc9' },
  { name: 'DAZN F1 (Fórmula 1)', resolution: '1080', streamId: '2c6e4c897661e6b0257bfe931b66d20b2ec763b6' },
  { name: 'DAZN F1 (Fórmula 1)', resolution: '720', streamId: '268289e7a3c5209960b53b4d43c8c65fab294b85' },

  // M. LaLiga
  { name: 'M. LaLiga', resolution: '1080P', streamId: '94d34491106e00394835c8cb68aa94481339b53f' },
  { name: 'M. LaLiga MultiAudio', resolution: '1080', streamId: 'd3de78aebe544611a2347f54d5796bd87f16c92d' },
  { name: 'M. LaLiga MultiAudio', resolution: '1080', streamId: '6d05b31e5e8fdae312fbd57897363a7b10ddb163' },
  { name: 'M. LaLiga', resolution: '720', streamId: '1bc437bce57b4b0450f6d1f8d818b7e97000745e' },
  { name: 'M. LaLiga 2', resolution: '1080', streamId: '83c6c4942d69f4aa324aa746c5d7dbfd7d1572b3' },
  { name: 'M. LaLiga 2', resolution: '720', streamId: 'f31a586422c9244196c810c84b6c85da350318a5' },
  { name: 'M. LaLiga 3', resolution: '1080', streamId: 'ebe14f1edeb49f2253e3b355a8beeadc9b4f0bc4' },
  { name: 'M. LaLiga 3', resolution: '720', streamId: '835639b89db00cc0d94660da3c10b6e38bfbcdc1' },
  { name: 'M. LaLiga 4', resolution: '1080', streamId: '68697ea4f261289d97bbc3418ad3cbc4180aa32f' },
  { name: 'M. LaLiga 5', resolution: '1080', streamId: 'c4bb3a84628b4e00fcca7f71279d05e1ce34b59b' },
  { name: 'M. LaLiga 6', resolution: '1080', streamId: 'a0c7f911f35d72c1abc86c89604e1d4171bf664f' },

  // La Liga BAR
  { name: 'La Liga BAR', resolution: '1080', streamId: '608b0faf7d3d25f6fe5dba13d5e4b4142949990e' },

  // DAZN LaLiga
  { name: 'DAZN LaLiga MultiAudio', resolution: '1080', streamId: '110d441ddc9713a7452588770d2bc85504672f47' },
  { name: 'DAZN LaLiga MultiAudio', resolution: '1080', streamId: 'ec29289b0b14756e686c03a501bae1efa05be70c' },
  { name: 'DAZN LaLiga MultiAudio', resolution: '1080', streamId: '6de4794cd02f88f14354b5996823413a59a1de0f' },
  { name: 'DAZN LaLiga', resolution: '720', streamId: '8c8c1e047a1c5ed213ba74722a5345dc55c3c0eb' },
  { name: 'DAZN LaLiga 2 MultiAudio', resolution: '1080', streamId: '97ba38d47680954be40e48bd8f43e17222fefecb' },
  { name: 'DAZN LaLiga 2 MultiAudio', resolution: '720', streamId: '51dbbfb42f8091e4ea7a2186b566a40e780953d9' },
  { name: 'DAZN LaLiga 3 MultiAudio', resolution: '1080', streamId: '3c72639799f5471b213a073f4c1c6bf28bd08035' },
  { name: 'DAZN LaLiga 4 MultiAudio', resolution: '1080', streamId: '3fc9d954b818522ff07dfe70051b6ea7a5ebbc61' },
  { name: 'DAZN LaLiga 5 MultiAudio', resolution: '1080', streamId: '922edf7e1c015026082b7f8061cf8159cb4afafd' },

  // LaLiga Smartbank
  { name: 'LaLiga Smartbank', resolution: '1080', streamId: 'b2706a7ffbea236a3b398139a3a606ada664c0eb' },
  { name: 'LaLiga Smartbank', resolution: '720', streamId: '121f719ebb94193c6086ef92865cf9b197750980' },
  { name: 'LaLiga Smartbank 2', resolution: '1080', streamId: '0cfdfde1b70623b8c210b0f7301be2a87456481d' },
  { name: 'LaLiga Smartbank 2', resolution: '720', streamId: '0a335406bad0b658aeddb2d38f8c0614b2e5623a' },
  { name: 'LaLiga Smartbank 3', resolution: 'SD', streamId: 'fefd45ed6ff415e05f1341b7d9da2988eacd13ea' },

  // Movistar Deportes
  { name: 'MovistarPlus', resolution: '1080', streamId: '56ac8e227d526e722624675ccdd91b0cc850582f' },
  { name: '#Vamos', resolution: '1080', streamId: 'd03c13b6723f66155d7a0df3692a3b073fe630f2' },
  { name: '#Vamos', resolution: '720', streamId: '12ba546d229bc39f01c3c18988a034b215fe6adb' },
  { name: '#Ellas', resolution: '1080', streamId: '67654e63b5065cdaa6c8e8d41bb5428b42b32830' },
  { name: 'Movistar Deportes', resolution: '1080', streamId: '55d4602cb22b0d8a33c10c2c2f42dae64a9e8895' },
  { name: 'Movistar Deportes', resolution: '720', streamId: '3a74d9869b13e763476800740c6625e715a39879' },
  { name: 'Movistar Deportes 2', resolution: '1080', streamId: '639c561dd57fa3fc91fde715caeb696c5efb7ce7' },
  { name: 'Movistar Deportes 3', resolution: '1080', streamId: '571bff4d12b1791eb99dbf20bec38e630693a6a3' },
  { name: 'Movistar Deportes 4', resolution: '1080', streamId: 'b4d1308a61e4caf8c06ac3d6ce89d165c015c2fb' },
  { name: 'Movistar Deportes 5', resolution: '1080', streamId: 'fcc0fd75bf1dba40b108fcf0d3514e0e549bfbac' },
  { name: 'Movistar Deportes 6', resolution: '720', streamId: 'cc5782d37ae6b6e0bab396dd64074982d0879046' },
  { name: 'Movistar deportes 7', resolution: '1080', streamId: '070f82d6443a52962d6a2ed9954c979b29404932' },

  // Movistar Liga de Campeones
  { name: 'Movistar L. Campeones MultiAudio', resolution: '1080', streamId: '0a26e20f39845e928411e09a124374fccb6e1478' },
  { name: 'Movistar L. Campeones MultiAudio', resolution: '1080', streamId: '775abd8697715c48a357906d40734ccd2a10513c' },
  { name: 'Movistar L. Campeones', resolution: '720', streamId: '8edb264520569b2280c5e86b2dc734e120032903' },
  { name: 'Movistar L. Campeones 2', resolution: '1080', streamId: 'c070cdb701fc46bb79d17568d99fc64620443d63' },
  { name: 'Movistar L. Campeones 2', resolution: '720', streamId: 'abdf9058786a48623d0de51a3adb414ae10b6e72' },
  { name: 'Movistar L. Campeones 3', resolution: '1080', streamId: '3618edda333dad5374ac2c801f5f14483934b97d' },
  { name: 'Movistar L. Campeones 3', resolution: '720', streamId: '0b348cc1ae499e810729661878764a0fab88ab69' },
  { name: 'Movistar L. Campeones 4', resolution: 'SD', streamId: '65a18a6bd83918a9586b673fec12405aaf4e9f7d' },
  { name: 'Movistar L. Campeones 5', resolution: 'SD', streamId: '11744c25a594e17d587ed0871fe40ff21b4bd1e0' },
  { name: 'Movistar L. Campeones 6', resolution: 'SD', streamId: 'fdda1f0dd8c33fbdc5a66ab98e291f570cae67cd' },
  { name: 'Movistar L. Campeones 7', resolution: 'SD', streamId: 'b7f47db93dced60f54e8f89e2366ed061b534049' },
  { name: 'Movistar L. Campeones 8', resolution: 'SD', streamId: 'd298c6e5c8be71f5995b45289c6388b225318b3c' },

  // DAZN
  { name: 'DAZN 1', resolution: '1080', streamId: '7cf0086fa7d478f51dbba952865c79e66cb9add5' },
  { name: 'DAZN 1', resolution: '720', streamId: '35c7f0c966ecde3390f4510bb4caded40018c07a' },
  { name: 'DAZN 2', resolution: '1080', streamId: 'ca923c9873fd206a41c1e83ff8fc40e3cf323c9a' },
  { name: 'DAZN 2', resolution: '720', streamId: 'a929eeec1268d69d1556a2e3ace793b2577d8810' },
  { name: 'DAZN 3', resolution: '1080', streamId: '19cd05c7ae26f22737ae5728b571ca36abd8a2e8' },
  { name: 'DAZN 4', resolution: '1080', streamId: '4e83f23945ab3e43982045f88ec31daaa4683102' },

  // EuroSport
  { name: 'EuroSport 1', resolution: '1080', streamId: '16ffa1713f42aa27317ee039a2bd0cdbc89a1580' },
  { name: 'EuroSport 2', resolution: '1080', streamId: '98784fa0714190de289f42eb5b84e405df7e685a' },
]

const filter = ref('')

const streamIds: ComputedRef<Link[]> = computed(() => links.filter(link => link.name.toLocaleLowerCase().includes(filter.value?.toLocaleLowerCase() ?? '')))

</script>

<template>
  <div class='-container'>
    <div class='p-links'>
      <a-input
        :value='filter'
        class='-mt-14 -mb-14 links__filter'
        placeholder='Escribe o nome do canal'
        @update:value='filter = $event'
      />
      <ul class='links__items'>
        <li v-for='channel in streamIds' :key='channel.streamId' class='-pb-1 -pt-1 item__link'>
          <nuxt-link class='link' :to='`acestream://${channel.streamId}`'>
            <span class='name'>{{ channel.name }}</span>
            <small class='resolution'>{{ channel.resolution }}</small>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang='css'>
.links__filter {
  position: sticky;
  top: 2em;
  z-index: 1;
}

.links__items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.item__link {
  width: 100%
}

.item__link .link  {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: var(--font-size);
  border: 2px solid var(--c-medium-light);
  padding: 22px;
  border-radius: var(--border-radius);
  cursor: pointer;
  justify-content: space-between;
}
.item__link .resolution {
  opacity: .35;
  font-weight: bold;
  font-size: .65em;
}
.item__link .link:hover {
  background-color: var(--c-medium-light);
}
</style>
