bkg = new BackgroundLayer
	backgroundColor: 'white'
	
	
# Create FlowComponent 
flow = new FlowComponent

 
flow.showNext(realTime)	
		
buyBtn.onTap ->
	flow.showOverlayBottom(shareAdd)
	
closeBtn.onTap ->
	flow.showPrevious()