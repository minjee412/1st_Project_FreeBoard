import {CardWrapper, Wrapper, Header, AvatarWrapper, Avatar, Info, Writer, CreatedAt, 
        Body, Title, Image, Contents, Youtube, LikeWrapper, IconWrapper, LikeIcon, LikeCount, DislikeIcon, 
        DislikeCount,
        BottomWrapper,
        Button, LinkIcon, LocationIcon
        } from '../detail/BoardDetail.styles'

import ReactPlayer from 'react-player'
import { Tooltip } from "antd";

export default function BoardDetailUI (props){
    return(
        <Wrapper>
            <CardWrapper>
                <Header>
                    <AvatarWrapper>
                        <Avatar src="/avatar.png"/>
                        <Info>
                            <Writer>{props.data?.fetchBoard.writer}</Writer>
                            <CreatedAt>{props.data?.fetchBoard.createdAt}</CreatedAt>
                        </Info>
                    </AvatarWrapper>
                    <IconWrapper>
            <LinkIcon src="/board/detail/link.png" />
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}>
              <LocationIcon src="/board/detail/location.png" />
            </Tooltip>
          </IconWrapper>
                </Header>
            

            <Body>
                <Title>{props.data?.fetchBoard.title}</Title>
                <Image></Image>
                <Contents>{props.data?.fetchBoard.contents}</Contents>
                <Youtube>
                    <ReactPlayer 
                        url = {props.data?.fetchBoard.youtubeUrl}
                        width = {486}
                        height = {240}
                        controls = {true}
                        playing = {true}
                        muted = {true} />
                    
                </Youtube>
            </Body>

            <LikeWrapper>
                <IconWrapper>
                    <LikeIcon onClick={props.onClickLike}></LikeIcon>
                    <LikeCount>{props.data?.fetchBoard.likeCount}</LikeCount>
                </IconWrapper>
                <IconWrapper>
                <DislikeIcon onClick={props.onClickDislike}></DislikeIcon>
                <DislikeCount>{props.data?.fetchBoard.dislikeCount}</DislikeCount>
                </IconWrapper>
            </LikeWrapper>
            </CardWrapper>

            <BottomWrapper>
            <Button onClick={props.onClickList}>목록으로</Button>
            <Button onClick={props.onClickMovetoEdit}>수정하기</Button>
            <Button onClick={props.onClickDelete}>삭제하기</Button>
            </BottomWrapper>  
        </Wrapper>
        
    )
}
