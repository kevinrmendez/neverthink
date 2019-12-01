# Neverthink

Here is my solution for neverthink assignment

I used Context to pass and change the state of the app from the children components.

For creating the responsive layout I listened the onLayout event from the View component and based of the
orientation. And when the orientation of the state changes, I provide a specific style to the components

In order to detect if the video has been watched or not, I changed the data structure so that
the playlist array contains an object with the video id property and watched property. After the
video is watched, I change the watched property. The order of the videos is set when the user changes of channel.

For this task I made two different versions of the app with different layouts, tha main one is located in the master branch. The other one is found in the branch called "version2"

## Installation

- Download the app from the repository
- Start and android emultor or connect a device
- Enjoy!

## Usage

```javascript
RUN METRO SERVER
npm run start
RUN APPLICATION IN ANDROID DEVICE
npm run android
```

# Dependencies

```
react-native-youtube
```
