const logic = async(data)=>{
    const {message,errorBits,protocol,window} = data;
    let pointer = 0, time = 0 , frames=[];
    switch (protocol) {
        case "STOP_AND_WAIT":
            while(pointer<message.length()){
                let ok = true;
                for (let index = 0; index < errorBits.length; index++) {
                    const element = errorBits[index];
                    if(element==pointer){
                        errorBits[index]=-1;
                        ok=false;
                        break;
                    }
                }
                time++;
                frames.push(time);
                if(ok){
                    frames.push(pointer);
                    pointer++;
                }
                else{
                    frames.push(-1*pointer);
                }
                time++;
                frames.push(time);
            }
            break;
        case "GO_BACK_N":
            
            break;
        case "SELECTIVE_REPEAT":
            
            break;
    
        default:
            break;
    }
    return frames;
}