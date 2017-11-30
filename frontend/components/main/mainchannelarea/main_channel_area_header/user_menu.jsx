import React from 'react';
import { withRouter } from 'react-router-dom';


class UserMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '', imagePreviewUrl: '', online_url: ''};
    this.handleOnlineChange = this.handleOnlineChange.bind(this);
    this.imageExists = this.imageExists.bind(this);
    this._handleImageChange = this._handleImageChange.bind(this);
    this.eventFire = this.eventFire.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    if(this.imageExists(this.state.online_url)) {
      this.props.updateUser({id: this.props.currentUser.id, image_url: this.state.online_url }).then(
      this.eventFire(document.getElementById('cog'), 'click'));
    } else if(this.imageExists(this.state.imagePreviewUrl)) {
      this.props.updateUser({id: this.props.currentUser.id, image_url: this.state.imagePreviewUrl }).then(
      this.eventFire(document.getElementById('cog'), 'click'));
    }
  }

  eventFire(el, etype){
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }

  imageExists (url){
    var image = new Image();
    image.src = url;
    if (!image.complete) {
        return false;
    }
    else if (image.height === 0) {
        return false;
    }
    return true;
  }

  _handleImageChange(e) {
    e.preventDefault();
    this.setState({online_url: ""});
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  handleOnlineChange(e) {
    e.preventDefault();
    this.setState({online_url: e.target.value });
    this.setState({imagePreviewUrl: "", file: ""});
  }

  render() {
    let {imagePreviewUrl, online_url} = this.state;
    let $imagePreview = null;
    let loading = <div className="previewText">Loading...</div>;

    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else if(online_url) {
      if(this.imageExists(online_url)) {
        $imagePreview = (<img src={online_url} />);
      } else {
        $imagePreview = loading;
      }
    } else {
      $imagePreview = (<div className="previewText">Image Preview</div>);
    }

    return (
      <div className='user-menu'>
        <div className='user-menu-innerdiv'>
          <h1>Update User Profile</h1>
          <div className="previewComponent">
            <form onSubmit={(e)=>this._handleSubmit(e)}>
              <label><h3>Upload Picture:</h3>
                <input className="fileInput"
                  type="file"
                  onChange={this._handleImageChange} />

                <label><h3>Or Insert Image URL:</h3>
                  <input className='fileInputText' type='text' onChange={this.handleOnlineChange} onInput={this.handleOnlineChange} value={this.state.online_url} />
                </label>
              </label>
              <div className="imgPreview">
                {$imagePreview}
              </div>
              <button className="submitButton"
                type="submit"
                onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
            </form>
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(UserMenu);
