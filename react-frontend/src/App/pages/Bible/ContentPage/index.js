import React, { Component } from 'react'
import classnames from 'classnames/bind'
import axios from 'axios'

import { getCurrentContentId } from 'src/utils/contentsUtils'
import ArrowButton from 'src/components/ArrowButton'

import css from './index.scss'
import Content from './Content'

const cx = classnames.bind(css)
const moduleName = 'ContentPage'

class ContentPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: null,
      contentIndex: 0
    }
  }

  componentDidMount() {
    this.getBibleContent(getCurrentContentId(document.URL))
  }

  linkRedirect(contentLink) {
    window.location.href = contentLink
  }

  getBibleContent(id) {
    axios.get(`https://www.yeramdri.com/bible-card/result/${id}`).then(res => {
      const [content] = res.data
      this.setState({ content })
    })
  }

  nextContentItem = () => {
    this.setState({
      contentIndex: this.state.contentIndex + 1
    })
  }

  prevContentItem = () => {
    this.setState({
      contentIndex: this.state.contentIndex - 1
    })
  }

  // contentCard 부분과 완전히 같은 코드... 어떻게 리팩토링해야할까...
  searchTag = tag => () => {
    const { location, push } = this.props.history
    const [, category] = location.pathname.split('/')
    push(`/${category}/results?search=${tag}`)
  }

  renderBibleQuestion(bibleQuestions) {
    return bibleQuestions.map(question => {
      return (
        <p
          className={cx(`${moduleName}-post-sharing-question`)}
          key={question.id}
        >
          {question.id}. {question.text}
        </p>
      )
    })
  }

  renderTags(tag) {
    return tag.split(',').map((tag, index) => {
      return (
        <span
          onClick={this.searchTag(tag)}
          className={cx(`${moduleName}-post-sharing-tag`)}
          key={index}
        >
          #{tag} &nbsp;
        </span>
      )
    })
  }

  render() {
    const { content } = this.state
    let returnComponent
    if (!content) {
      returnComponent = <h1>Loading</h1>
    } else {
      returnComponent = (
        <div className={cx(`${moduleName}`)}>
          <div className={cx(`${moduleName}-contentCardSlider`)}>
            <div className={cx(`${moduleName}-contentCardSlider-leftArrow`)}>
              <ArrowButton
                onClick={() => this.prevContentItem()}
                disabled={this.state.contentIndex === 0}
                direction={'left'}
              />
            </div>
            <div className={cx(`${moduleName}-contentCardSlider-rightArrow`)}>
              <ArrowButton
                onClick={() => this.nextContentItem()}
                disabled={
                  this.state.contentIndex === content.multiMedia.length - 1
                }
                direction={'right'}
              />
            </div>
            <div
              className={cx(`${moduleName}-contentCardSlider-wrapper`)}
              style={{
                transform: `translateX(-${this.state.contentIndex *
                  14 *
                  (100 / content.multiMedia.length)}%)`
              }}
            >
              {content.multiMedia.map((media, id) => (
                <Content media={media} key={id} />
              ))}
            </div>
          </div>
          <div className={cx(`${moduleName}-post`)}>
            <h3 className={cx(`${moduleName}-post-title`)}>{content.title}</h3>
            <p className={cx(`${moduleName}-post-bibleRange`)}>
              {content.bibleTitle1}
              {content.bibleTitle2}절
            </p>
            <p className={cx(`${moduleName}-post-bibleText`)}>
              {content.bibleContent}
            </p>
            <div className={cx(`${moduleName}-post-sharing`)}>
              {this.renderBibleQuestion(content.bibleQuestion)}
              <p className={cx(`${moduleName}-post-sharing-advice`)}>
                {content.bibleAdvice}
              </p>
              {this.renderTags(content.tag)}
              <button
                className={cx(`${moduleName}-post-sharing-button`)}
                onClick={() => {
                  this.linkRedirect(content.link)
                }}
              >
                원문 말씀 보러가기
              </button>
            </div>
          </div>
        </div>
      )
    }
    return returnComponent
  }
}

export default ContentPage
