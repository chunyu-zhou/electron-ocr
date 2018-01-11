import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionBackup from 'material-ui/svg-icons/action/backup';
import ActionVoice from 'material-ui/svg-icons/action/settings-voice';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import {blue500, yellow600, pink300, green400} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';

export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle () {
    this.setState({open: !this.state.open});
  }

  handleClose () {
    this.setState({open: false});
  } 

  render() {
    return (
      <div>
        <RaisedButton
          label="Open Drawer"
          onClick={this.handleToggle.bind(this)}
        />
        <Drawer
          docked={false}
          width={230}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <List>
            <ListItem
              leftAvatar={<Avatar icon={<ActionBackup />} backgroundColor={blue500} />}
              rightIcon={<ActionInfo />}
              primaryText="上传图片"
            />
            <ListItem
              leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
              rightIcon={<ActionInfo />}
              primaryText="文字识别"
            />
            <ListItem
              leftAvatar={<Avatar icon={<ActionVoice />} backgroundColor={pink300} />}
              rightIcon={<ActionInfo />}
              primaryText="语音朗读"
            />
            <ListItem
              leftAvatar={<Avatar icon={<ActionFavorite />} backgroundColor={green400} />}
              rightIcon={<ActionInfo />}
              primaryText="联系我们"
            />
          </List>
        </Drawer>
      </div>
    );
  }
}