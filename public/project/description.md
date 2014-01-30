
#Project description

###Subject

A digital companion platform

### Rationale

Today smartphones and tablets, along with the traditional PCs are the most common interfaces to access computing services and the internet. 

In my opinion this won’t last long, as humans still prefer to interact with other people, and in the future will seek more personal interaction paradigms, using less intrusive means of communicating, such as voice, touch, and other senses.

A proof of such tendency is the basis of services like Siri and Google Voice. While these services reached a quite advanced level of technological perfection, the fact of having to communicate with them using the phone, relying on cloud services for storing personal information, limits their potential in several ways.

In this context I envision that the role of personal digital companions, small peripherals populating our physical world, and bridging it with the digital universe, will be of great importance. Being private, these devices could have access to our data, preferences, contacts while maintaining a good privacy level. At the same time they could use all the technology potential with a more intimate interface, sharing the same environment where the user lives.

My project proposal is about building a programmable digital companion, powered by open hardware and software. I hope this could be the basis of the democratic diffusion of such objects, or at least of raising the awareness of the idea of interacting with computers using different means.

### Goals

In order to realize my vision I foresee the following goals:

- Build in the companion all the basic sensing capabilities needed for a natural interaction, including sight, speech, presence and touch.
- Provide basic, but efficient, interaction capabilities such as movement, sound, speech and light. And complement those with a display allowing to show a set of facial expressions conveying emotion.
- Solicit, where possible, emotional feedback.
- Offer an easy to use API, initially based on the widely known Python language, in order to empower the final user and allow her to program new behaviors, interface new services, and express creativity.
- Ensure interoperability of the companion by providing a standard communication protocol, allowing its use from a wealth of different platforms, controllers and devices.
- Produce an inexpensive design that can be built using the digital fabrication tools available in Fab Labs and commodity hardware

### Design considerations

In my vision the digital companion should not look like a robot, or other known human-like forms. It should be something that could look like a design object, a toy, a plant or other object commonly found in houses and offices.

For this reason the initial design looks like a plant, hoping to engage the same kind of affection sentiment that people are used to feel with their pet plants. Other designs can be considered in a similar way, i.e. a toy car for a kid, a wall clock, a kitchen timer and so on.

The initial concept sketch provides a basic “cactus” like object in a vase. The device features a rotating eyeball, and the “main unit” itself rotates within the vase.
Inside the case many sensors will be placed, possibly hidden by small holes, in order to have a less technological look.

<img id="concept" class="th text-center" src="../images/final/cactus_concept.jpg" alt="Digital Companion Concept"/>
<label for="concept" class="text-center">A concept rendering of the digital companion</label>

### Technical considerations

The digital companion won’t host any intelligence on itself. It will only provide the means to acquire inputs and provide outputs.

It will do so using a custom micro-controller board, also contained into the case. This decision was taken to maintain the design simpler, and more importantly reusable independently from the availability of new technologies on the interaction side.

All interactivity will be driven by an external board, i.e. a linux computer or embedded board. This board will be responsible for executing the Python software, along with high level features such as speech synthesis, speech recognition, network communication, and so on.

Of course, it will be possible but not mandatory, to bundle both controllers within the main unit, in order to have a standalone solution working independently from other systems, and just relying on internet connectivity via Wifi link.

### Technical specifications

The digital companion will contain the following electronic components:

- custom micro-controller board
- stepper motor for rotation on the y-axis
- servo motor for eye movement
- cmos sensor for image capture inside the eyeball
- ultrasonic sensor
- capacitative sensors for head and ears / arms
- RGB leds within the main case 
- e-ink screen for mouth animations
- microphone
- speaker
- buzzer

The MCU board will be controlled via a serial link (i.e. USB, Bluetooth, RF)

### Digital Companion API

The proposed API will deal with low-level access to the device capabilities. It is foreseen that such features will serve as the basis of pre-built and user-written software behaviors.

The following modules are foreseen:

- Motor control: body rotation and eye movement
- Sound Recording and Playback
- Vibration
- Image and Video acquisition
- Capacitative button press and proximity 
- Vibration
- RGB Led control (on/off, color, intensity)
- Display control (text, shapes, bitmap)
- Ultrasonic sensing

### Behaviors

The actual end-user features of the digital companions will be programmed as behaviors. The project doesn’t aim to build a full set of pre-programmed ones, but instead will provide a number of examples serving as the basis for further work coming from users.

The following list provides just some ideas of the high-level modules and applications which could be built for the digital companion:

### High level features

*Speech recognition*

Using sound samples acquired from the companion, existing speech recognition libraries and online services could process simple spoken commands, offer dictation services and so on.
 
*Speech synthesis*

Several existing solutions can provide means to speak utterances in several languages, then relying the produced sound files to the companion. This would be the main mean of communication with the user, but could also serve as a text-to-speech solution for reading documents, emails and messages.

*Presence detection*

Using inputs from the ultrasonic sensor and microphone, the companion could wake up from sleep, activate other behaviors or follow the user using the webcam sensor.

*Choreography*

Recording a set of movements, lights, vibration and sounds, the user could assemble small “choreography” to notify for a specific event, or simply for entertaining the user.

*Mood detection*

Using the visual and aural senses the companion could provide information about the actual “mood” of the room where it resides. For example for detecting a loud environment, thus switching to more visual feedback, or not disturbing the user when a very silent environment is sensed. Similar considerations could be made using light intensity, number of people detected in front of the companion and similar.

###Useful applications

The companion could prove to be very useful during many moments of the daily life. 

*Productivity*

For instance it could serve as a “productivity buddy” to help the user stay focused and complete tasks from a list, reminding him about events, arranging the daily schedule or controlling interruptions.

*Social interface*

The companion could provide access to the social networks in a more personal way, signaling interactions from the user;s friends, monitoring interesting feeds and providing alerts for relevant events. In specific moments, the companion could record speech notes, take pictures and videos to be directly fed to social streams at user’s will.

*Media center*

The role of the companion could also be to provide up-to-date information, read audio-books and access to the user media library according with the user preferences but also context information provided by the mood detection features. 

*Education*

By using the speech synthesis and recognition the companion could provide an easy mean for learning new languages, talking to the user into a foreign language, proposing drills and possibly correcting his spelling. Users of this application could also benefit from the “always on” capability of the device, also interacting with the user schedule to find free moments where to propose language learning activities.

*Tele-presence*

Two or more companions could be linked to provide an avatar over the network, i.e. representing for example a family member living abroad during a family gathering, parents or loved ones during working hours and so on.  
