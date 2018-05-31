import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class AlbumCounter extends React.Component {
	render() {
		return (
			<div>
			  
			   <p>
			       <span>AlbumCounter Component</span><br />
				   <i>How many albums:</i> {this.props.albums.length} <br />
				   <i>Last albumn added title:</i> {this.props.albums[0]}
			   </p>
			</div>
		);
	}
}

AlbumCounter.propTypes = {
	albums: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
	albums: state.albums || [],
});

export default connect(mapStateToProps, null)(AlbumCounter);
