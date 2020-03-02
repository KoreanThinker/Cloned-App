import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function HomeMenu(props) {
    return (
        <Svg width={19} height={13} viewBox="0 0 19 13" {...props}>
            <G data-name="\uADF8\uB8F9 192">
                <G data-name="\uADF8\uB8F9 191" opacity={0.8} fill="none" stroke="#fff">
                    <Path data-name="\uC120 1" d="M0 .5h19" />
                    <Path data-name="\uC120 2" d="M0 6.5h19" />
                    <Path data-name="\uC120 3" d="M0 12.5h19" />
                </G>
            </G>
        </Svg>
    )
}

export default HomeMenu
