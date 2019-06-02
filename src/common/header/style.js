import styled from 'styled-components'
import logo from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
`
export const Logo = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 58px;
  background: url(${logo});
  background-size: cover;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`

export const NavItem = styled.div`
  &.left {
    float: left;
    color: #333;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
  height: 100%;
  width: 100px;
  text-align: center;
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
`

export const NavWrapper = styled.div`
  position: relative;
  float: left;
  height: 100%;
  width: 160px;
  i {
    position: absolute;
    right: 5px;
    top: 13px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
  }
  &.focused {
    width: 240px;
    i {
      background: #969696;
    }
  }
  &.slide-enter {
    transition: width .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: width .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  top: 58px;
  left: 0;
  width: 245px;
  padding: 20px 10px 0 20px;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  box-sizing: border-box;
  background: #fff;
`

export const SearchInfoTitle = styled.div`
  font-size: 14px;
  color: #969696;
  margin-bottom: 10px;
`

export const SearchInfoTitleSpan = styled.span`
  float: right;
  cursor:pointer;
  .iconfont {
    display: block;
    float: left;
    transition: transform .2s ease-out;
    transform: rotate(0deg)
  }
`

export const SearchItem = styled.a`
  float: left;
  padding: 2px 6px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 0 10px 15px 0;
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 100%;
  height: 38px;
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 19px;
  margin-top: 9px;
  padding: 0 40px 0 20px;
  box-sizing: border-box;
  background: #eee;
  &::placeholder {
    color: #999;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
`

export const Button = styled.a`
  &.writeing {
    background: #ea6f5a;
    color: #fff;
  }
  &.reg {
    color: #ea6f5a;
  }
  float: right;
  font-size: 15px;
  border-radius: 19px;
  height: 38px;
  line-height: 38px;
  padding: 0 20px;
  margin: 9px 20px 0 0;
  border: 1px solid #ec6149b3;
`