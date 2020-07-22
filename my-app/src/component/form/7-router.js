import React, { useState } from "react";
import {
    Prompt,
    useParams,
} from "react-router-dom";

const BlockingForm = () => {
    // 获取路由参数
    const { id } = useParams();
    let [isBlocking, setIsBlocking] = useState(false);
    return (
        <form
            onSubmit={event => {
                event.preventDefault();
           
            }}
        >
            <Prompt
                when={isBlocking}
                message={location =>
                    `你是否要跳转到 ${location.pathname}`
                }
            />
            <p>
                Blocking?{" "}
                {isBlocking ? "Yes, click a link or the back button" : "Nope"}
            </p>
            <p>
                <input
                    size="50"
                    placeholder="输入值测试路由拦截"
                    onChange={event => {
                        setIsBlocking(event.target.value.length > 0);
                    }}
                />
            </p>
            <p>
                <button type="submit">提交表单模拟接触拦截</button>
            </p>
            <div>
                <h2>获取路由参数</h2>
                <p>个人id是:{id}</p>
            </div>
        </form>
    );
}
export default BlockingForm;