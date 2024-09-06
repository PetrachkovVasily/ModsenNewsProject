import * as React from "react"
import { ArticleImg, ArticleWrapper, Text } from "./styled"
import Chips from "@components/Chips"
import Titles from "@components/Titles"
import content from "@assets/content.jpeg"

function Article() {
  return (
    <ArticleWrapper>
      <Chips/>
      <Titles/>
      <ArticleImg src={content} alt="Article Image"/>
      <Text>
        <h2></h2>
        <p>
          Layer one or L1 refers to a base blockchain protocol like Bitcoin or Ethereum. These networks operate on a decentralized ledger secured by proof-of-work (PoW) mining or proof-of-stake (PoS) staking. L1 chains such as Bitcoin and Ethereum offer unparalleled security. However, during peak times, both of these chains grapple with sluggish transaction speeds and steep fees.
        </p>
      </Text>
    </ArticleWrapper>
  )
}

export default Article