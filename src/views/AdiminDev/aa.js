export function getre2() {
    setInterval(() => {
       const re= window.getre()
       console.log(JSON.stringify(re))
    }, 1000);
}