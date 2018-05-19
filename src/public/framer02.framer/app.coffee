{LottieLayer} = require 'LottieLayer'

gradient = new Gradient
	start: "#05F"
	end: "#0DF"

Framer.Device.background.gradient = gradient

# Variables
loadTime = 10
delayTime = 2
pageCount = 6
gutter = 10
hideBelow = Screen.height
spacer = 20
indicators = []

# Projects Data
animationData = [
	{
		name: "anim01",
		path: "images/project-lottie/va3mLTE-01/va3mLTE-01.json",
		subText: "Lorem ipsum dolor amet direct trade cred yuccie kinfolk."	
	},
	{
		name: "anim02",
		path: "images/project-lottie/va3mLTE-01/va3mLTE-01.json",
		subText: "Lorem ipsum dolor amet direct trade cred yuccie kinfolk."	
	},
	{
		name: "anim03",
		path: "images/project-lottie/va3mLTE-01/va3mLTE-01.json",
		subText: "Lorem ipsum dolor amet direct trade cred yuccie kinfolk."	
	},
]


# Interal Audit of what we need and do not need (pain points)
# With Joe, Han, Phil
#
# Prioritize work with time.
#



	
	
	
# Set up FlowComponent
flow = new FlowComponent
flow.showNext(progFlow00)


# Setting Up Toast Banners 
progressToast.parent = progFlow02
progressToast.y = hideBelow

progressToastAlt.parent = progFlow02
progressToastAlt.y = hideBelow

sucessToast.parent = progFlow02
sucessToast.y = hideBelow
failToast.parent = progFlow02
failToast.y = hideBelow


# bottomBars = [ bottomBarContSucess, bottomBarContProgress]

# Animations ---------------------------------

progBarFill = new Animation progFill,
	width: progBar.width
	options:
		time: loadTime
		
spin = new Animation progressSpinner,
	rotation: 1080
	options:
		time: loadTime
		
		
# States -------------------------------------

progressToast.states =
	active:
		y: Align.bottom()
		animationOptions:
			curve: Spring(damping: 0.5)
			time: 0.5
	expanded:
		height: 400
		y: 400

progressToastAlt.states =
	active:
		y: Align.bottom()
		animationOptions:
			curve: Spring(damping: 0.5)
			time: 0.5
	expanded:
		height: 400
		y: 400

sucessToast.states =
	active:
		y: Align.bottom()
		animationOptions:
			curve: Spring(damping: 0.5)
			time: 0.5

failToast.states =
	active:
		y: Align.bottom()
		animationOptions:
			curve: Spring(damping: 0.5)
			time: 0.5

# 1. Start
btnPair.onClick ->
	flow.showNext(progFlow01)
	progBarFill.start()
	
# Animation Fill
progBarFill.onAnimationStart ->
	Utils.delay 0.5, ->
		
		flow.showOverlayBottom(progFlow02)
		progressToastAlt.stateCycle("active")
		spin.start()
		
		# Positioning the progBar
		progBar.parent = progressToast
		progBar.y = Align.center(3)
		progBar.x = Align.center()
		
		progBarFill.onAnimationEnd -> 
			
			rando = Utils.randomChoice(["fail", "fail"])
			
			if rando == "fail"
				failToast.bringToFront()
				failToast.stateCycle("active")
			if rando == "pass"
				sucessToast.bringToFront()
				sucessToast.stateCycle("active")
			
# 			print rando















# Animation Fill Up
pageScroller = new PageComponent
	parent: progFlow02
	y: Align.top()
	x: Align.center()
	width: Screen.width
	height: Screen.height - sucessToast.height
	scrollVertical: false
	backgroundColor: null
	clip: false

# Card Pagination Indicator
indicatorCont = new Layer
	width: pageScroller.width / 4.5
	height: 20
	x: Align.center(9)
	y: Align.bottom(-(failToast.height + (spacer*2)))
	backgroundColor: null
	parent: progFlow02

# Loop to create pages
for i in [0...animationData.length]
	page = new Layer
		height: 250
		width: Screen.width
		x: (Screen.width + gutter) * i
		y: Align.center()
		backgroundColor: null
		opacity: 1
		parent: pageScroller.content
		name: "page " + (i + 1)

	animationCont = new Layer
		parent: page
		height: page.height
		width: page.width
		x: Align.center
		y: Align.center
		backgroundColor: null
		
	dummyAnimation = new Layer
		parent: page
		size: 150
		borderRadius: 10
		backgroundColor: "#CCCCCC"
		x: Align.center()
		y: Align.top()
		
	bar01 = new Layer
		parent: dummyAnimation
		height: 2
		width: dummyAnimation.width * 0.9
		x: Align.center()
		y: Align.center()
		rotation: 45
		
	bar02 = new Layer
		parent: dummyAnimation
		height: 2
		width: dummyAnimation.width * 0.9
		x: Align.center()
		y: Align.center()
		rotation: -45
	
	
	
	# Animation Block
# 	customAnim = new LottieLayer
# 		name: animationData[i].name
# 		path: animationData[i].path
# 		speed: 1
# 		opacity: 0.5
# 		autoplay: true
# 		backgroundColor:null
# 		loop: true
# 		x: Align.center()
# 		y: Align.top()
# 		height: 150
# 		width: 150
# 		parent: animationCont
		
		
	subText = new TextLayer
		parent: page
		text: animationData[i].subText
		width: page.width * 0.4 
		fontSize: 15
		lineHeight: 1.20
# 		fontFamily: 'SF Pro Text'
		fontWeight: 'regular'
		letterSpacing: -.24
		textAlign: 'center'
		y: Align.bottom()
		x: Align.center()
		color: '#000'

		
		inactiveColor = "rgba(0,0,0,0.2)"
		activeColor = "rgba(0,0,0,1)"
			
		# creating the indicator
		indicator = new Layer
			parent: indicatorCont
			size: 8
			borderRadius: indicatorCont.height
			x: (indicatorCont.width / animationData.length) * i
			y: Align.center()
			name: i
			backgroundColor: inactiveColor
		# creating states for the indicator
		indicator.states = 
			active: 
				backgroundColor: activeColor
			inactive: 
				backgroundColor: inactiveColor
		
		#pushing indicators into array
		indicators.push(indicator)

# Making the first indicator active
pageScroller.snapToPage(pageScroller.content.children[0])
current = pageScroller.horizontalPageIndex(pageScroller.currentPage)
indicators[current].states.switch("active")
	
# Changing indicator state on page change
pageScroller.on "change:currentPage", ->
	indicator.states.switch("default") for indicator in indicators
	current = pageScroller.horizontalPageIndex(pageScroller.currentPage)
	indicators[current].states.switch("active")


# Interactions ---------------------------------	

# Fail Interactions
failToast.onTap ->
	flow.showOverlayBottom(failScreen)

btnRetry.onTap ->
	flow.showNext(progFlow01)
	

failScreen.onTap ->
	flow.showPrevious()

# Sucess Interactions
sucessToast.onTap ->
	flow.showNext(profileScreen)
	
sucessScreen.onTap ->
	flow.showPrevious()

# Progress Interactions
progressToast.onTap ->
	flow.showOverlayBottom(inProgressScreen)
	
	# Positioning the progBar
	progBar.parent = inProgressScreen
	progBar.y = Align.center()
	progBar.x = Align.center()
	
inProgressScreen.onTap ->
	flow.showPrevious()
	
	# Positioning the progBar
	progBar.parent = progressToast
	progBar.y = Align.center(3)
	progBar.x = Align.center()




	
	
# Canceling Pairing
# expandBtn.onTap ->
# 	progressToast.stateCycle("expanded", "active")
# 	Utils.delay (delayTime/2), ->
# 		flow.showNext(progFlow00)
		
