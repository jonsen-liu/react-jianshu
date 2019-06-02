import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  height: 600px;
  margin: 0 auto;
`

export const Homeleft = styled.div`
  float: left;
  width: 640px;
  height: 600px;
  padding: 30px 0 0 15px;
  box-sizing: border-box;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`

export const HomeRight = styled.div`
  float: left;
  width: 280px;
  height: 600px;
  padding-top: 30px;
  margin-left: 40px;
  box-sizing: border-box;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
`

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color: #000;
  margin: 0 18px 18px 0;
  &.topic {
    background: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
  }
  img {
    float: left;
    height: 100%;
  }
  span {
    float: left;
    padding: 0 6px 0 11px;
  }
  a {
    color: #000;
    text-decoration: none;
  }
`

export const ListWrapper = styled.div`
  overflow: hidden;
  padding: 10px 0 10px 0;
  border-top: 1px solid #f0f0f0;
`

export const ListItem = styled.div`
  padding: 20px 0 20px 0;
  border-bottom: 1px solid #f0f0f0;
  img {
    float: right;
    width: 150px;
    height: 100px;
    margin-left: 15px;
  }
  h1 {
    font-size: 18px;
    font-weight: 700;
    color: #333;
    line-height: 1.5;
    margin-bottom: 4px;
  }
  p {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`

export const ItemFoot = styled.div`
  color: #b4b4b4;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  .grade {
    color:  #ea6f5a;
    margin-right: 10px;
    i {
      font-size: 12px;
    }
  }
  a {
    color: #b4b4b4;
    margin-right: 10px;
    text-decoration: none;
    i {
      font-size: 13px;
    }
  }
  i {
    font-size: 14px;
    margin-right: 2px;
  }
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 20px;
  margin: 30px auto 60px;
  padding: 10px 15px;
  text-align: center;
  font-size: 15px;
  border-radius: 20px;
  color: #fff;
  background-color: #a5a5a5;
  cursor: pointer;
  box-sizing: border-box;
`

export const RecommendWrapper = styled.div`
  width: 100%;
`

export const RecommendItem = styled.a`
  display: block;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: url(${(props)=>props.imgUrl});
  background-size: cover;
  margin-bottom: 6px;
`

export const WriterWrapper = styled.div`
  width: 100%;
  font-size: 14px;
  color: #969696;
  margin-top: 20px;
`

export const WriterTitle = styled.div`
  width: 100%;
  height: 19px;
`

export const WriterSpan = styled.span`
  float:right;
`

export const WriterContent = styled.div`
  width: 100%;
  margin-top: 15px;
  overflow: hidden;
  img {
    float: left;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 10px;
  }
  div {
    float: left;
    &.subscription {
      margin-top: 5px;
      padding: 0;
      font-size: 13px;
      color: #42c02e;
    }
    h5 {
      padding-top: 5px;
      margin-right: 60px;
      font-size: 14px;
      color: #333;    
      height: 25px;
      line-height: 20px;
    }
    p {
      margin-top: 2px;
      font-size: 12px;
      color: #969696;
    }
  }
`

export const WriterLookAll = styled.a`
  display: block;
  text-align: center;
  width: 100%;
  height: 19px;
  line-height: 19px;
  padding: 7px 7px 7px 12px;
  margin-top: 20px;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
`

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 30px;
  border: 1px solid #ccc;
  font-size: 24px;
  text-align: center;
`