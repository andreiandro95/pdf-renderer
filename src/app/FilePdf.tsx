"use client"
import React from "react"
import { Document, Page, Text, View } from "@react-pdf/renderer"

interface FilePdfProps {
    data: {
      name: string;
      age: number;
      data: string;
    };
    company: {
        id: number;
        name: string;
    };
    status: string[];
    people: {
        id: number;
        name: string;
    }[]
  }

const FilePdf: React.FC<FilePdfProps> = ({data, company, status, people}) => {
    const originalDate = new Date(data.data);
  originalDate.setDate(originalDate.getDate() - 1);
  const signDate = originalDate.toISOString().split('T')[0];
  const employee = people.find(el => el.name === data.name)






    return (
        <Document>
            <Page size="A4">
                <View>
                    <Text>{data.name}</Text>
                </View>
                <View>
                    <Text>{data.age}</Text>
                </View>
                <View><Text>{company.name}</Text></View>
                <View><Text>{signDate}</Text></View>
                <View><Text>{employee?.name}</Text></View>
                <View >
                    {status.map((el, index) => (
                        <Text key={index}
                        >
                        {el}
                        </Text>
                    ))}
                </View>
                <View>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae. Quis blandit turpis cursus in hac habitasse platea. Amet massa vitae tortor condimentum lacinia quis vel eros. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Sodales neque sodales ut etiam. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Id donec ultrices tincidunt arcu non sodales neque. Nam aliquam sem et tortor. Rhoncus urna neque viverra justo. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Ut diam quam nulla porttitor massa. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Morbi tristique senectus et netus. Velit egestas dui id ornare arcu.</Text>
                </View>
                <View>
                    <Text>Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Quis auctor elit sed vulputate mi sit. Dictum varius duis at consectetur lorem. Congue eu consequat ac felis donec. Elit ullamcorper dignissim cras tincidunt lobortis. Nunc faucibus a pellentesque sit amet porttitor. A diam maecenas sed enim ut sem viverra aliquet eget. Sit amet massa vitae tortor condimentum lacinia. Nibh praesent tristique magna sit amet. Consequat mauris nunc congue nisi vitae suscipit tellus. Tempus imperdiet nulla malesuada pellentesque elit. Semper quis lectus nulla at volutpat diam ut venenatis. Morbi blandit cursus risus at ultrices mi tempus. Risus in hendrerit gravida rutrum quisque. A condimentum vitae sapien pellentesque habitant morbi.</Text>
                </View>
                <View>
                    <Text>Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Lacinia quis vel eros donec. Sed velit dignissim sodales ut. Rhoncus est pellentesque elit ullamcorper. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Id ornare arcu odio ut sem nulla pharetra. Facilisi cras fermentum odio eu feugiat pretium nibh. Adipiscing enim eu turpis egestas pretium. Purus gravida quis blandit turpis cursus in hac habitasse platea. Accumsan tortor posuere ac ut consequat semper viverra. In hac habitasse platea dictumst quisque sagittis purus. Quam lacus suspendisse faucibus interdum posuere. Volutpat ac tincidunt vitae semper quis lectus nulla. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a.</Text>
                </View>
                <View>
                    <Text>Vel pharetra vel turpis nunc eget lorem dolor sed. Lorem dolor sed viverra ipsum nunc aliquet. Nunc aliquet bibendum enim facilisis gravida neque convallis. Nibh praesent tristique magna sit amet purus gravida quis. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Adipiscing elit pellentesque habitant morbi. Tellus at urna condimentum mattis pellentesque id nibh tortor. Hac habitasse platea dictumst vestibulum rhoncus est. Quam id leo in vitae turpis massa sed elementum tempus. Velit euismod in pellentesque massa. Et egestas quis ipsum suspendisse ultrices. Tincidunt ornare massa eget egestas purus viverra accumsan. In massa tempor nec feugiat nisl pretium fusce id velit. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. A lacus vestibulum sed arcu non odio euismod lacinia at. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Id leo in vitae turpis massa sed elementum.</Text>
                </View>
                <View>
                    <Text>Ante metus dictum at tempor commodo ullamcorper a. Turpis tincidunt id aliquet risus feugiat in ante. Sapien faucibus et molestie ac feugiat. Sodales ut eu sem integer vitae justo eget magna fermentum. Neque convallis a cras semper auctor neque vitae tempus quam. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. Sodales ut eu sem integer. Sem fringilla ut morbi tincidunt. Vel eros donec ac odio tempor orci dapibus. Augue eget arcu dictum varius duis at consectetur lorem donec. Leo duis ut diam quam nulla porttitor massa id neque. Diam quam nulla porttitor massa id neque aliquam. Suscipit tellus mauris a diam maecenas sed enim ut sem. Est ullamcorper eget nulla facilisi. Leo in vitae turpis massa sed elementum tempus egestas. Non arcu risus quis varius quam quisque id. Morbi tristique senectus et netus et malesuada fames ac.</Text>
                </View>
                <View>
                    <Text>Risus ultricies tristique nulla aliquet enim tortor. Nibh venenatis cras sed felis eget velit aliquet sagittis. Diam maecenas sed enim ut sem viverra aliquet eget sit. Vitae semper quis lectus nulla at volutpat diam. Leo integer malesuada nunc vel risus. In hendrerit gravida rutrum quisque. Risus pretium quam vulputate dignissim suspendisse in est. Velit laoreet id donec ultrices tincidunt arcu non sodales. Ut sem viverra aliquet eget sit. Nisl pretium fusce id velit ut tortor pretium viverra. Sed risus ultricies tristique nulla aliquet enim tortor at. Sit amet justo donec enim diam vulputate. Volutpat lacus laoreet non curabitur gravida. Imperdiet proin fermentum leo vel orci porta. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Vitae aliquet nec ullamcorper sit amet risus. Adipiscing diam donec adipiscing tristique risus nec.</Text>
                </View>
                <View>
                    <Text>Congue eu consequat ac felis. Id cursus metus aliquam eleifend mi. Eget aliquet nibh praesent tristique magna sit. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Sed augue lacus viverra vitae congue. A pellentesque sit amet porttitor eget dolor morbi non. Pellentesque elit eget gravida cum sociis natoque. Pellentesque elit eget gravida cum. Accumsan in nisl nisi scelerisque eu ultrices. Sed nisi lacus sed viverra tellus in hac habitasse. Pulvinar elementum integer enim neque volutpat. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. In nisl nisi scelerisque eu ultrices vitae auctor eu.</Text>
                </View>
                <View>
                    <Text>Quam vulputate dignissim suspendisse in est ante. Sodales ut eu sem integer vitae. Sem viverra aliquet eget sit amet tellus. Odio euismod lacinia at quis risus sed vulputate odio. Leo in vitae turpis massa sed elementum tempus egestas. Sed velit dignissim sodales ut eu sem integer vitae justo. Ipsum dolor sit amet consectetur adipiscing elit. Sed risus ultricies tristique nulla aliquet enim tortor. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Enim diam vulputate ut pharetra sit. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Integer quis auctor elit sed vulputate mi sit amet. Felis eget nunc lobortis mattis aliquam faucibus. Facilisis sed odio morbi quis commodo odio aenean sed. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Mattis pellentesque id nibh tortor. Urna et pharetra pharetra massa massa.</Text>
                </View>
                <View>
                    <Text>Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Feugiat nisl pretium fusce id velit ut tortor pretium. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Eget mi proin sed libero. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Etiam sit amet nisl purus in mollis nunc sed id. Tristique nulla aliquet enim tortor at auctor urna. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. At imperdiet dui accumsan sit. In aliquam sem fringilla ut morbi. Odio tempor orci dapibus ultrices in iaculis nunc sed. Non nisi est sit amet facilisis magna etiam tempor. Ut venenatis tellus in metus vulputate eu scelerisque. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Bibendum arcu vitae elementum curabitur vitae nunc. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Amet dictum sit amet justo donec enim diam vulputate ut. Malesuada bibendum arcu vitae elementum curabitur vitae nunc.</Text>
                </View>
                <View>
                    <Text>Magna etiam tempor orci eu lobortis elementum nibh tellus. Cras pulvinar mattis nunc sed blandit libero. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Imperdiet proin fermentum leo vel orci porta non. Vivamus at augue eget arcu dictum varius duis. Malesuada nunc vel risus commodo viverra. Blandit libero volutpat sed cras ornare arcu dui. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Faucibus turpis in eu mi bibendum neque egestas congue. Feugiat scelerisque varius morbi enim nunc. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. A pellentesque sit amet porttitor eget dolor morbi. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Quis ipsum suspendisse ultrices gravida. Nunc non blandit massa enim. Quisque id diam vel quam elementum pulvinar etiam.</Text>
                </View>
                <View><Text>Pretium fusce id velit ut tortor pretium viverra suspendisse. Sit amet justo donec enim diam. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Vitae semper quis lectus nulla at volutpat diam. Vitae purus faucibus ornare suspendisse sed nisi. Platea dictumst quisque sagittis purus sit amet. Purus gravida quis blandit turpis cursus in hac habitasse. Sed turpis tincidunt id aliquet risus. Nunc sed augue lacus viverra vitae congue. Tincidunt nunc pulvinar sapien et. In ante metus dictum at tempor commodo ullamcorper. Consequat interdum varius sit amet mattis vulputate enim. Ultrices neque ornare aenean euismod elementum. Nunc id cursus metus aliquam eleifend mi in nulla. Vitae congue mauris rhoncus aenean vel elit scelerisque. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Fames ac turpis egestas sed.</Text></View>
                <View><Text>Quam quisque id diam vel. Magna ac placerat vestibulum lectus mauris ultrices eros in. Tempus quam pellentesque nec nam aliquam. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Neque viverra justo nec ultrices dui. Iaculis nunc sed augue lacus viverra vitae congue eu. Porttitor leo a diam sollicitudin tempor. Enim lobortis scelerisque fermentum dui faucibus in. Quisque id diam vel quam elementum pulvinar.</Text></View>
                <View><Text>Amet cursus sit amet dictum sit amet. Eu mi bibendum neque egestas congue. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Lectus sit amet est placerat in egestas erat imperdiet. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Integer enim neque volutpat ac tincidunt vitae semper. Varius duis at consectetur lorem. Varius vel pharetra vel turpis. Sit amet volutpat consequat mauris.</Text></View>
                <View><Text>Ridiculus mus mauris vitae ultricies leo integer malesuada. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Quam elementum pulvinar etiam non quam. Quam quisque id diam vel quam elementum pulvinar etiam. Semper quis lectus nulla at volutpat diam ut venenatis. Velit euismod in pellentesque massa placerat duis ultricies lacus. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Id volutpat lacus laoreet non curabitur gravida arcu. Posuere ac ut consequat semper viverra nam libero justo laoreet. Sed velit dignissim sodales ut eu sem integer. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Proin libero nunc consequat interdum varius sit amet. Vulputate odio ut enim blandit.</Text></View>
                <View><Text>Massa vitae tortor condimentum lacinia quis vel. At risus viverra adipiscing at in tellus integer feugiat scelerisque. Dui vivamus arcu felis bibendum ut tristique et. Ornare suspendisse sed nisi lacus sed viverra tellus. Sit amet massa vitae tortor condimentum lacinia quis vel eros. Elit eget gravida cum sociis natoque penatibus et. Sem viverra aliquet eget sit amet tellus cras adipiscing. Commodo odio aenean sed adipiscing diam donec. Vulputate mi sit amet mauris. Mi sit amet mauris commodo. Egestas maecenas pharetra convallis posuere morbi leo. Accumsan tortor posuere ac ut consequat semper viverra. Nec ultrices dui sapien eget mi.</Text></View>
            </Page>
        </Document>
    )
}

export default FilePdf