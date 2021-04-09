import React, { Component } from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

export class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			notifications: [],
		};
	}

	componentDidMount() {
		window.addEventListener('message', (event) => {
			switch (event.data.action) {
				case 'display':
					let notification = {
						show: true,
						type: event.data.type,
						vertical: event.data.vertical,
						horizontal: event.data.horizontal,
						duration: event.data.duration,
						variant: event.data.variant,
						message: event.data.message,
					};
					this.setState({
						notifications: [...this.state.notifications, notification],
					});
					break;
				default:
					break;
			}
		});
	}

	handleClose = (event, reason) => {
		let notifications = this.state.notifications;
		notifications[0].show = false;
		this.setState({ notifications: notifications });
		setTimeout(() => {
			notifications.shift();
			this.setState({ notifications: notifications });
		}, 300);
	};

	render() {
		return (
			<div>
				{this.state.notifications[0] && (
					<Snackbar
						anchorOrigin={{
							vertical: this.state.notifications[0].vertical,
							horizontal: this.state.notifications[0].horizontal,
						}}
						open={this.state.notifications[0].show}
						autoHideDuration={this.state.notifications[0].duration}
						onClose={this.handleClose}
					>
						<Alert
							severity={this.state.notifications[0].type}
							variant={this.state.notifications[0].variant}
						>
							{this.state.notifications[0].message}
						</Alert>
					</Snackbar>
				)}
			</div>
		);
	}
}

export default App;
