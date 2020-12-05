import React from "react";
import "./directory.scss";
import MenuItem from "../menu-item/menItem";

class DirectoryMenu extends React.Component {
    state = {
        section:[
            {
              title: 'hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1,
              linkUrl: 'hats'
            },
            {
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              linkUrl: 'jackets'
            },
            {
              title: 'sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              linkUrl: 'sneakers'
            },
            {
              title: 'womens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              linkUrl: 'womens'
            },
            {
              title: 'mens',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              id: 5,
              linkUrl: 'mens'
            }
          ]
        }
    render () {
        const {section} = this.state

        return (
        <div className = 'directory-menu'>
        {
            section.map(({id, title, imageUrl, size, linkUrl}) => (
                <MenuItem key={id} title={title} imageUrl=
                {imageUrl} size = {size} linkUrl={linkUrl}/>
            ))
        }
        </div>
        )
    }
}

export default DirectoryMenu