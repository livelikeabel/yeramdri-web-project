<template>
  <div class="bible-found-div">
    <div class="bible-found-title-div">
      <h3>{{title}}</h3>
    </div>
    <div class="bible-found-image-div">
      <img class="bible-found-image" :src="image" alt="말씀사진">
    </div>
    <div class="bible-found-posts-div">
      <div class="bible-found-tags-div">
        <span v-for="item in tag" :key="item">#{{item}}</span>
      </div>
      <div class="bible-found-content-div">
        <p class="bible-found-section">{{bibleTitle1}} {{bibleTitle2}}</p>
        <p class="bible-found-text">{{bibleContent}}</p>
      </div>
      <div class="bible-found-sharing-div">
        <p class="bible-found-question" v-for="item in bibleQuestion" :key="item.id">{{item.id}}. {{item.text}}</p>
        <p class="bible-found-advice">{{bibleAdvice}}</p>
      </div>
      <div class="bible-found-link-div">
        <button class="bible-found-link" v-on:click="goSermon">원문 설교 보러가기</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title', 'image', 'tag', 'bibleTitle1', 'bibleTitle2', 'bibleContent', 'bibleQuestion', 'bibleAdvice', 'link'],
  name: 'Found',
  methods: {
    goSermon () {
      window.open(this.link, '_blank')
    }
  }
}
</script>
<style scoped>
@media (min-width: 1024px) {
  /* desktop */
  .bible-found-div {
    width: 800px;
    margin: 150px auto 100px auto;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    background-color: #e6e6e61b;
  }
  .bible-found-title-div {
    margin-top: 1.3vh;
    margin-bottom: 1.3vh;
    text-align: center;
    color: #262626;
  }
  .bible-found-title-div > h3 {
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 20px;
    padding-bottom: 15px;
    font-size: 25px;
  }
  .bible-found-posts-div {
    width: 96%;
    margin: 0 auto;
  }
  .bible-found-tags-div {
    margin-top: 1vh;
  }
  .bible-found-tags-div > span {
    font-size: 2.3vh;
    color: #003569;
    padding: 0.5vh;
    margin-right: 0.5vh;
  }
  .bible-found-section {
    margin-top: 1.3vh;
    margin-bottom: 1.3vh;
    font-size: 2.5vh;
    color: #262626;
  }
  .bible-found-image {
    width: 800px;
  }
  .bible-found-text {
    height: 20vh;
    font-size: 1.9vh;
    overflow: scroll;
    color: #262626;
  }
  .bible-found-sharing-div {
    margin-top: 1vh;
    margin-bottom: 1vh
  }
  .bible-found-question {
    margin-top: 0px;
    margin-bottom: 1vh;
    font-size: 2vh;
    color: #777;
  }
  .bible-found-advice {
    font-size: 2vh;
    color: #777;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .bible-found-link-div {
    margin-top: 2vh;
    margin-bottom: 1vh;
    text-align: center;
  }
  .bible-found-link {
    text-decoration: none;
    color: #262626;
    font-size: 2.5vh;
    padding: 1vh 3vh;
    width: 250px;
    font-weight: 700;
    background-color: white;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    margin-top: 30px;
    margin-bottom: 50px;
  }
}
@media (max-width: 1024px) {
  .bible-found-div {
    margin: 8vh auto 0 auto;
  }
  .bible-found-title-div {
    margin-top: 1.3vh;
    margin-bottom: 1.3vh;
    text-align: center;
  }
  .bible-found-title-div > h3 {
    margin-top: 1vh;
    margin-bottom: 1vh;
    font-size: 3vh;
  }
  .bible-found-posts-div {
    width: 96%;
    margin: 0 auto;
  }
  .bible-found-tags-div {
    margin-top: 1vh;
  }
  .bible-found-tags-div > span {
    font-size: 2.3vh;
    background-color: rgb(60, 122, 252);
    color: white;
    padding: 0.5vh;
    margin-right: 0.5vh;
  }
  .bible-found-section {
    margin-top: 1.3vh;
    margin-bottom: 1.3vh;
    font-size: 2.5vh;
  }
  .bible-found-image {
    width: 100vw;
  }
  .bible-found-text {
    height: 20vh;
    font-size: 1.9vh;
    overflow: scroll;
  }
  .bible-found-sharing-div {
    margin-top: 1vh;
    margin-bottom: 1vh
  }
  .bible-found-question {
    margin-top: 0px;
    margin-bottom: 1vh;
    font-size: 2vh;
    color: #777;
  }
  .bible-found-advice {
    font-size: 2vh;
    color: #777;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .bible-found-link-div {
    margin-top: 2vh;
    margin-bottom: 1vh;
    text-align: center;
  }
  .bible-found-link {
    text-decoration: none;
    color: black;
    font-size: 2.5vh;
    padding: 1vh 3vh;
    width: 50vw;
    font-weight: 700;
    background-color: white;
    border: 0.5vh solid black;
  }
}
</style>
