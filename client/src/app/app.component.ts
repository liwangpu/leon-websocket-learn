import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as faker from 'faker';
interface IFormValue {
    message: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    public form: FormGroup;
    public connected: boolean;
    public socket: WebSocket;
    public constructor(
        private fb: FormBuilder
    ) {
        this.form = this.fb.group({
            message: [faker.random.words(2)]
        });
    }

    public ngOnDestroy(): void {
        this.closeConnect();
    }

    public ngOnInit(): void {
        this.connect();
    }

    public connect(): void {
        this.socket = new WebSocket('ws://localhost:8081');

        this.socket.addEventListener('open', () => {
            this.connected = true;
            console.log('连接成功!');
        });

        this.socket.addEventListener('close', () => {
            this.connected = false;
            console.log('断开连接!');
        });

        this.socket.addEventListener('message', event => {
            console.log('接收到消息:', event.data);
        });
    }

    public closeConnect(): void {
        if (!this.socket) { return; }
        this.socket.close();
        this.socket = null;
    }

    public sendMessage(): void {
        const fv: IFormValue = this.form.value;
        this.socket.send(fv.message);
    }

    public generateMessage(): void {
        this.form.patchValue({ message: faker.random.words(2) });
    }

}
