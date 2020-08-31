import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  margin-top: 30px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  float: right;
  width: 280px;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  line-height: 32px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  .topic-pic {
    float: left;
    display: block;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;

export const RecommedWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommedItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;

export const WriterWrapper = styled.div`
  &.wrapper {
  width: 278px;
  height: 390px;
  /* border: 1px solid #dcdcdc; */
  border-radius: 3px;
  font-size: 14px;
  }
  .follow {
    float: right;
  }
`;

export const WriterTop = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  line-height: 20px;   
  font-size: 14px;
  color: #969696;
`

export const WriteItem = styled.div`
  margin-top: 15px;
  height: 48px;
  overflow: hidden;
  line-height: 48px;
  color: #333;
  img {
    float: left;
    width: 48px;  
    height: 48px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .center {
    padding-top: 5px;
    line-height: 20px;
    a{
      color: #333;
    }
    p {
      font-size: 12px;
      color:#969696;
    }
  }
  .follow{
    color:#42c02e;
  }
`

export const WriteMore = styled.a`
  display: block;
  padding: 7px 7px 7px 12px;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  text-align: center;
  margin-top: 20px;
`

export const WriterSwitch = styled.div`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 14px;
  border: 1px solid #dcdcdc;
`