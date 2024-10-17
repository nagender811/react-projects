import Tabs from "./Tabs"

function RandomComponent () {
    return <h1>Some Random Content</h1>
}
function TabTest() {
    const tabs = [
        {
            label: "Tab 1",
            content: <div>This is Content for Tab 1</div>
        },
        {
            label: "Tab 2",
            content: <div>This is Content for Tab 2</div>
        },
        {
            label: "Tab 3",
            content: <RandomComponent />
        }
    ]
    
    function handleChange(currentTabIndex) {
        console.log(currentTabIndex);
        
    }
  return <Tabs tabsContent={tabs} onChange={handleChange}/>
}

export default TabTest