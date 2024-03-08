<!--
Способы вывода новостей ->
release - выпуск свежей версии
beta - выпуск версии нуждающейся в доработке
refactor - изменение
fix - ремонт
update - обновление
style - стилизация
-->

<template>
  <section class="informations">
    <block-default>
      <div class="news">
        <div class="news__content news-content">
          <div class="news-content__block news-content-block">
            <div class="news-content-block__header news-content-block-header">
              <h4 class="news-content-block-header__title news-content-block-header-title">Добавили страницу
                отслеживания нашего вклада в проект</h4>
              <version-control class="release" text="Release 1.1"/>
              <version-control class="fix" text="Fix"/>
            </div>
            <span class="news-content-block__content news-content-block-content">Добавили страницу отслеживания нашего вклада в проект.</span>
            <span class="news-content-block__content news-content-block-content">Исправлены некоторые баги в системе редактирования и создания задач.</span>
          </div>
        </div>
      </div>
    </block-default>
  </section>
</template>

<script>
import BlockDefault from '@/components/BlockDefault/index.vue'
import VersionControl from '@/components/VersionControl/index.vue'

export default {
  components: {
    BlockDefault,
    VersionControl
  }
}
</script>

<style lang="stylus" scoped src="./index.styl"></style>